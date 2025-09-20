import type { Server } from 'http';

import type { Application, Handler } from 'express';
import express from 'express';
import helmet from 'helmet';

import { createGracefulShutdown } from './helpers/create-graceful-shutdown.js';
import { parseAppOptions } from './helpers/parse-app-options.js';
import type { ParsedAppOptions, RawAppOptions } from './schemas/app-options.js';
import { cors } from './schemas/cors.js';
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
   * @param opts The parsed App options.
   */
  constructor(opts: ParsedAppOptions) {
    this.options = opts;
    this.app = express();

    this.log = this.setupLogger();

    this.setupMiddlewares();
  }

  /**
   * Public server instance getter.
   * @returns The server instance or null.
   */
  public getServer() {
    return this.server;
  }

  /**
   * Async factory to create the App instance.
   * @param rawOpts The raw App options opject.
   * @throws
   * @returns The App isntance if the parsing succeed.
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
   * Starts the server.
   */
  public async start(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.server = this.app.listen(this.options.port, () => {
        console.log(
          `[INFO] ${this.options.name} started at http://localhost://${this.options.port}`
        );
        resolve(); // Resolve the promise once the server is listening
      });
    });

    this.setupGracefulShutdown();
  }

  /**
   * Inject one or more middlewares into the application.
   * @param middlewares The array of middlewares to inject.
   */
  public injectMiddlewares(middlewares: Handler[]) {
    this.app.use(...middlewares);
  }

  /**
   * Registers handlers for graceful shutdown.
   */
  private setupGracefulShutdown() {
    const shutdown = createGracefulShutdown(this.server);

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGQUIT', () => shutdown('SIGQUIT'));
  }

  /**
   * Configure the logger.
   * @returns The logger instance.
   */
  private setupLogger() {
    const $log = logger(this.options.logger);

    return $log;
  }

  /**
   * Register global middlewares.
   */
  private setupMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors(this.options.cors));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
