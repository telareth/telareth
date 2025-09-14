import dotenv from 'dotenv';

import cors from 'cors';
import type { Application } from 'express';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

import { PROXIES_READY } from '../consts.js';
import type { GatewayOptionsOutput } from '../schemas/gateway-options.js';
import { parseGatewayOptions } from '../utils/parse-gateway-options.js';

import { setupServiceProxy } from './proxy/setup-service-proxy.js';
import { healthzHandler } from './routes/handlers/healthz.js';
import { readinessHandler } from './routes/handlers/readiness.js';
import { GatewayRouter } from './routes/router.js';

/**
 * Gateway class for handling:
 * - Service proxying
 * - Global middlewares (security, logging, rate limiting, etc.)
 * - Health and readiness endpoints.
 */
export class Gateway {
  private readonly app: Application;
  private readonly options: GatewayOptionsOutput;

  /**
   * Initializes a new Gateway instance.
   * Loads environment variables, validates configuration, and sets up base middlewares & endpoints.
   * @param options User defined options that comes from process.env.
   */
  constructor(options: GatewayOptionsOutput) {
    this.options = options;
    this.app = express();

    this.setupMiddlewares();
    this.setupRootRouter();
  }

  /**
   * Async factory to create a Gateway instance.
   * @returns A promise that resolves to a Gateway instance.
   */
  public static async create(): Promise<Gateway | null> {
    dotenv.config();
    const options = await parseGatewayOptions(process.env);
    return new Gateway(options);
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   * @returns Promise&lt;void>.
   */
  public async start(): Promise<void> {
    try {
      await this.setupProxies();

      this.app.listen(this.options.GATEWAY_PORT, () => {
        console.log(`[INFO] Gateway started at ${this.options.GATEWAY_URL}`);
      });
    } catch (err) {
      console.error('[ERROR] Failed to start gateway:', err);
      process.exit(1);
    }
  }

  /**
   * Register global middlewares:
   * - Helmet (security headers)
   * - CORS
   * - Morgan (logging)
   * - JSON & URL parsing
   * - Rate limiting.
   */
  private setupMiddlewares(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan('combined')); // logs all requests
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Rate limiter
    const limiter = rateLimit({
      windowMs: this.options.RATE_LIMIT_WINDOW_MS,
      max: this.options.RATE_LIMIT_MAX,
      standardHeaders: true,
      legacyHeaders: false,

      /**
       * Custom handler when rate limit is exceeded.
       * @param req Express request.
       * @param res Express response.
       */
      handler: (req, res) => {
        console.warn(`[WARN] Rate limit exceeded from ${req.ip}`);
        res.status(429).json({
          error: 'Too many requests, please try again later.',
        });
      },
    });

    this.app.use(limiter);

    console.log('[INFO] Global middlewares initialized');
  }

  /**
   * Sets up the root router.
   */
  private setupRootRouter() {
    const router = new GatewayRouter({
      app: this.app,
    });

    router.mountRoute(healthzHandler);
    router.mountRoute(readinessHandler);
  }

  /**
   * Sets up all dynamic service proxies.
   * @returns Promise&lt;void>.
   */
  private async setupProxies(): Promise<void> {
    await setupServiceProxy(this.app, this.options.GATEWAY_PREFIX_MODE);
    this.app.set(PROXIES_READY, true);
    console.log('[INFO] Service proxies initialized');
  }
}
