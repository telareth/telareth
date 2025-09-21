import { App } from '@telareth/server';
import type { Logger } from '@telareth/server/schemas';
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
  private logger: Logger;

  /**
   * @param options The raw/unsafe gateway options.
   */
  constructor(options?: RawGatewayOptions) {
    this.options = parseGatewayOptions(options);
    this.app = new App(this.options.server);
    this.logger = this.app.getLogger();
  }

  /**
   * Public Gateway options getter.
   * @returns The parsed Gateway options.
   */
  public getOptions(): ParsedGatewayOptions {
    return this.options;
  }

  /**
   * Public Logger getter.
   * @returns The Logger instance.
   */
  public getLogger() {
    return this.logger;
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    await this.app.start();
  }
}
