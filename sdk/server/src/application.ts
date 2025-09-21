import type { Server } from 'http';

import type { Application, Handler } from 'express';
import express from 'express';

import { createGracefulShutdown } from './helpers/create-graceful-shutdown.js';
import { parseAppOptions } from './helpers/parse-app-options.js';
import { setupCorsMiddleware } from './middlewares/cors.js';
import { setupHelmetMiddleware } from './middlewares/helmet.js';
import { setupHttpLoggerMiddleware } from './middlewares/http-logger.js';
import { setupRateLimitMiddleware } from './middlewares/rate-limit.js';
import type { ParsedAppOptions, RawAppOptions } from './schemas/app.js';
import type { Logger } from './schemas/logger.js';
import { logger } from './schemas/logger.js';

/**
 * Express Application Factory.
 */
export class App {
  private readonly options: ParsedAppOptions;
  private readonly app: Application;
  private server: Server | null = null;
  private log: Logger;

  /**
   * Creates a new App instance.
   * @param opts Parsed application options.
   */
  constructor(opts: ParsedAppOptions) {
    this.options = opts;
    this.app = express();

    // Configures logger
    this.log = this.setupLogger();
    this.app.set('logger', this.log);

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
    return this.log;
  }

  /**
   * Async factory to create the App instance from raw options.
   * @param rawOpts Raw application options.
   * @throws Throws an error if parsing fails.
   * @returns A new App instance.
   */
  public static async create(rawOpts: RawAppOptions): Promise<App> {
    const options = await parseAppOptions(rawOpts);

    if (!options.success) {
      console.error(options.error);
      throw new Error('AppOptionsError', { cause: options.error });
    }

    return new App(options.data);
  }

  /**
   * Starts the HTTP server.
   */
  public async start(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.server = this.app.listen(this.options.port, () => {
        console.log(
          `[INFO] ${this.options.name} started at http://localhost:${this.options.port}`
        );
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
    const shutdown = createGracefulShutdown(this.server);

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGQUIT', () => shutdown('SIGQUIT'));
  }

  /**
   * Configure the logger instance.
   * @returns The logger instance.
   */
  private setupLogger(): Logger {
    return logger(this.options.logger);
  }

  /**
   * Register global middlewares.
   * HTTP logger runs first to capture all requests.
   */
  private setupMiddlewares(): void {
    const app = this.app;
    const options = this.options;

    setupHttpLoggerMiddleware(app, options);
    setupHelmetMiddleware(app, options);
    setupCorsMiddleware(app, options);
    setupRateLimitMiddleware(app, options);

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
