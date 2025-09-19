import { App } from '@telareth/server';
import { parseGatewayOptions } from './helpers/parse-gateway-options.js';
import type {
  ParsedGatewayOptions,
  RawGatewayOptions,
} from './schemas/gateway-options.js';

/**
 * Gateway Factory class.
 */
export class Gateway {
  private readonly options: ParsedGatewayOptions;
  private readonly app: App;

  /**
   * @param options The parsed gateway optyions object.
   * @param app The App instance.
   */
  constructor(options: ParsedGatewayOptions, app: App) {
    this.options = options;
    this.app = app;
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

    // Use nullish coalescing for safety.
    const app = await App.create({
      name: options.name, // Default 'gateway'
      port: options.port, // Default 4000
      helmet: options.helmet,
      cors: options.cors,
      logger: options.logger, // default to 'tiny'
    });

    return new Gateway(options, app);
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    await this.app.start();

    // const server = this.app.getServer();
    // if (server) {
    // }
  }
}
