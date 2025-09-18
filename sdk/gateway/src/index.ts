import dotenv from '@dotenvx/dotenvx';

import type { Server } from 'http';

import type { Application } from 'express';
import express from 'express';

import { parseGatewayOptions } from './helpers/parse-gateway-options.js';
import type {
  GatewayOptionsInput,
  GatewayOptionsOutput,
} from './schemes/gateway-options.js';

/**
 * Gateway Factory class.
 */
export class Gateway {
  private readonly options: GatewayOptionsOutput;
  private readonly app: Application;
  private server: Server | null = null;

  /**
   * @param options The parsed gateway optyions object.
   */
  constructor(options: GatewayOptionsOutput) {
    this.options = options;
    this.app = express();
  }

  /**
   * Async factory to create a Gateway instance.
   * @param rawOptions The object containing the Gateway options, usually coming from process.env.
   * @returns The parsed Gateway options.
   */
  public static async create(
    rawOptions: GatewayOptionsInput
  ): Promise<Gateway | null> {
    // Load and parse .env file
    dotenv.config({ override: true, debug: false });

    const options = await parseGatewayOptions(rawOptions);

    return new Gateway(options);
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    this.server = this.app.listen(this.options.GATEWAY_PORT, () => {
      console.log(
        `[INFO] Gateway started at http://localhost://${this.options.GATEWAY_PORT}`
      );
    });
  }
}
