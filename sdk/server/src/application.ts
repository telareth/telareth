import type { Server } from 'http';

import type { Application, Handler } from 'express';
import express from 'express';

import { createGracefulShutdown } from './helpers/create-graceful-shutdown.js';
import { setupAppOptions } from './helpers/setup-app-options.js';
import { setupCorsMiddleware } from './helpers/setup-cors-middleware.js';
import { setupHelmetMiddleware } from './helpers/setup-helmet-middleware.js';
import { setupHttpLoggerMiddleware } from './helpers/setup-http-logger-middleware.js';
import { setupLogger } from './helpers/setup-logger.js';
import { setupRateLimitMiddleware } from './helpers/setup-rate-limit-middleware.js';
import type { ParsedAppOptions } from './schemas/app.js';
import type { Logger } from './schemas/logger.js';

/**
 * Express Application Factory.
 */
export class App {
  private readonly options: ParsedAppOptions;
  private readonly app: Application;
  private server: Server | null = null;
  private logger: Logger;

  /**
   * Creates a new App instance.
   * @param opts Parsed application options.
   */
  constructor(opts?: ParsedAppOptions) {
    this.options = setupAppOptions(opts);
    this.app = express();

    // Configures logger
    this.logger = setupLogger(this.options);
    this.app.set('logger', this.logger);

    // Configures global middlewares
    this.setupMiddlewares();
  }

  /**
   * Get the server instance.
   * @returns The HTTP server instance or null if not started.
   */
  public getServer(): Server | null {
    return this.server;
  }

  /**
   * Get the logger instance.
   * @returns The logger instance.
   */
  public getLogger(): Logger {
    return this.logger;
  }

  /**
   * Starts the HTTP server.
   */
  public async start(): Promise<void> {
    const { port, name } = this.options;

    await new Promise<void>((resolve) => {
      this.server = this.app.listen(port, () => {
        // TODO: configure server host hostname, ...
        this.logger.info(`${name} started at http://localhost:${port}`);
        resolve();
      });
    });

    this.setupGracefulShutdown();
  }

  /**
   * Injects one or more middlewares into the Express app.
   * @param middlewares Array of Express handlers to inject.
   */
  public injectMiddlewares(middlewares: Handler[]): void {
    this.app.use(...middlewares);
  }

  /**
   * Registers handlers for graceful shutdown.
   */
  private setupGracefulShutdown(): void {
    const shutdown = createGracefulShutdown(this.logger, this.server);

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGQUIT', () => shutdown('SIGQUIT'));
  }

  /**
   * Register global middlewares.
   * HTTP logger runs first to capture all requests.
   */
  private setupMiddlewares(): void {
    const app = this.app;
    const options = this.options;

    setupHttpLoggerMiddleware(app, options?.httpLogger);
    setupHelmetMiddleware(app, options?.helmet);
    setupCorsMiddleware(app, options?.cors);
    setupRateLimitMiddleware(app, options?.rateLimit);

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
