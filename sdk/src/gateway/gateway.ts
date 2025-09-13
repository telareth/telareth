import express, { type Express } from 'express';
import dotenv from 'dotenv';
import { z } from 'zod';
import { setupServiceProxy } from './proxy.js';

/**
 * Gateway configuration schema
 */
const GatewayConfigSchema = z.object({
  GATEWAY_PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(3000),
  GATEWAY_URL: z.url().default('http://localhost:3000'),
  // add other env vars here as needed
});

/**
 * Type of parsed Gateway options
 */
export type GatewayOptions = z.infer<typeof GatewayConfigSchema>;

export class Gateway {
  private readonly app: Express;
  private readonly options: GatewayOptions;

  constructor() {
    dotenv.config();
    this.options = GatewayConfigSchema.parse(process.env);
    this.app = express();
  }

  /**
   * Starts the gateway
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
   * Sets up all dynamic service proxies
   */
  private async setupProxies(): Promise<void> {
    await setupServiceProxy(this.app);
  }
}
