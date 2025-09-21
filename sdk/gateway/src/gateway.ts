import { App } from '@telareth/server';
import { parseGatewayOptions } from './helpers/parse-gateway-options.js';
import type {
  ParsedGatewayOptions,
  RawGatewayOptions,
} from './schemas/gateway.js';

/**
 * Gateway Factory class.
 */
export class Gateway {
  private readonly options: ParsedGatewayOptions;
  private readonly app: App;

  /**
   * @param options The parsed gateway options object used to configure the gateway.
   * @param app The underlying App instance that runs the HTTP server.
   */
  constructor(options: RawGatewayOptions, app: App) {
    this.options = parseGatewayOptions(options);
    this.app = app;
  }

  /**
   * Public Gateway options getter.
   * @returns The parsed Gateway options.
   */
  public getOptions(): ParsedGatewayOptions {
    return this.options;
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    await this.app.start();
  }
}
