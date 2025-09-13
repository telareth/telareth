import dotenv from 'dotenv';

import cors from 'cors';
import type { Express } from 'express';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { dsrc } from 'src/datasource/index.js';
import { z } from 'zod';

import { setupServiceProxy } from './proxy.js';

/**
 * Gateway configuration schema.
 */
const GatewayConfigSchema = z.object({
  GATEWAY_PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(3000),
  GATEWAY_URL: z.url().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(900000), // 15 min
  RATE_LIMIT_MAX: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(100), // 100 requests
});

/**
 * Type of parsed Gateway options.
 */
export type GatewayOptions = z.infer<typeof GatewayConfigSchema>;

/**
 *
 */
export class Gateway {
  private readonly app: Express;
  private readonly options: GatewayOptions;
  private proxiesReady = false;

  /**
   *
   */
  constructor() {
    dotenv.config();
    this.options = GatewayConfigSchema.parse(process.env);
    this.app = express();

    this.setupMiddlewares();
    this.setupHealthcheck();
    this.setupReadiness();
  }

  /**
   * Starts the gateway.
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
   * Register global middlewares.
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
      standardHeaders: true, // adds RateLimit-* headers
      legacyHeaders: false, // disables X-RateLimit-* headers

      /**
       * @param req
       * @param res
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
   * Register a simple healthcheck endpoint.
   */
  private setupHealthcheck(): void {
    this.app.get('/healthz', (_req, res) => {
      res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      });
    });

    console.log('[INFO] Healthcheck endpoint registered at /healthz');
  }

  /**
   * Register a readiness endpoint.
   */
  private setupReadiness(): void {
    this.app.get('/readyz', async (_req, res) => {
      try {
        // DB check
        await dsrc.$queryRaw`SELECT 1`;

        if (!this.proxiesReady) {
          return res
            .status(503)
            .json({ status: 'not ready', reason: 'Proxies not initialized' });
        }

        return res.status(200).json({ status: 'ready' });
      } catch (err) {
        console.error('[ERROR] Readiness check failed:', err);
        return res
          .status(503)
          .json({ status: 'not ready', reason: 'DB not reachable' });
      }
    });

    console.log('[INFO] Readiness endpoint registered at /readyz');
  }

  /**
   * Sets up all dynamic service proxies.
   */
  private async setupProxies(): Promise<void> {
    await setupServiceProxy(this.app);
  }
}
