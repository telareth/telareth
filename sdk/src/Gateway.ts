import express, { type Express } from 'express';

export class Gateway {
  private app: Express;
  private port: number;

  constructor(port?: number) {
    this.port = port ?? parseInt(process.env.GATEWAY_PORT ?? '3000', 10);
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares() {
    this.app.use(express.json());
    // TODO: add logging, CORS, proxy setup later
  }

  private setupRoutes() {
    this.app.get('/health', (_req, res) => {
      res.json({ status: 'ok' });
    });
    // TODO: add service proxy, etc.
  }

  public start() {
    // TODO: improve start function, add graceful shutdown, always restart, etc
    this.app.listen(this.port, () => {
      console.log('[INFO]', `Gateway started at http://localhost:${this.port}`);
    });
  }

  public getApp(): Express {
    return this.app;
  }
}
