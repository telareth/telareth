import { App } from '@telareth/server';
import type { RawAppOptions } from '@telareth/server/schemas';
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
  constructor(options: ParsedGatewayOptions, app: App) {
    this.options = options;
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
   * Async factory to create a Gateway instance.
   * @param rawOptions The object containing the Gateway options, usually coming from process.env.
   * @returns The Gateway instance.
   */
  public static async create(rawOptions: RawGatewayOptions): Promise<Gateway> {
    const optionsParser = await parseGatewayOptions(rawOptions);

    if (!optionsParser.success) {
      console.error(optionsParser.error);
      throw new Error('GatewayOptionsError', { cause: optionsParser.error });
    }

    const options = optionsParser.data;

    // Let App validate its own options separately
    const app = await App.create(rawOptions as RawAppOptions);

    return new Gateway(options, app);
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    await this.app.start();
  }
}
