import type { Express } from 'express';
import express from 'express';

import { setupServiceProxy } from './gateway/proxy.js';

/**
 * Represents the API Gateway server.
 */
export class Gateway {
  private app: Express;
  private port: number;

  /**
   * Creates a new Gateway instance.
   * @param port The port number to listen on. Defaults to `process.env.GATEWAY_PORT` or 3000.
   */
  constructor(port?: number) {
    this.port = port ?? parseInt(process.env.GATEWAY_PORT ?? '3000', 10);
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  /**
   * Sets up all middlewares for the Express app.
   */
  private setupMiddlewares() {
    this.app.use(express.json());
    // TODO: add logging, CORS, proxy setup later
  }

  /**
   * Sets up poxies.
   */
  private async setupProxies() {
    await setupServiceProxy(this.app);
  }

  /**
   * Sets up all routes for the Express app.
   */
  private setupRoutes() {
    this.app.get('/health', (_req, res) => {
      res.json({ status: 'ok' });
    });
    // TODO: add service proxy, etc.
  }

  /**
   * Starts the Gateway server and listens on the configured port.
   */
  public async start() {
    await this.setupProxies();

    // TODO: improve start function, add graceful shutdown, always restart, etc
    this.app.listen(this.port, () => {
      console.log('[INFO]', `Gateway started at http://localhost:${this.port}`);
    });
  }

  /**
   * Returns the underlying Express app instance.
   * @returns The Express application.
   */
  public getApp(): Express {
    return this.app;
  }
}
