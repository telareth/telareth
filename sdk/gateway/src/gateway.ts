import { App } from '@telareth/server';
import type { Logger } from '@telareth/server/schemas';
import { parseGatewayOptions } from './helpers/parse-gateway-options.js';
import type {
  ParsedGatewayOptions,
  RawGatewayOptions,
} from './schemas/gateway.js';

/**
 * Gateway Factory.
 */
export class Gateway {
  private readonly options: ParsedGatewayOptions;
  private readonly app: App;
  private logger: Logger;

  /**
   * @param options The raw/unsafe App options.
   */
  constructor(options?: RawGatewayOptions) {
    this.options = parseGatewayOptions(options);
    this.app = new App(this.options.server);
    this.logger = this.app.getLogger();
  }

  /**
   * @returns Parsed gateway options.
   */
  public getOptions(): ParsedGatewayOptions {
    return this.options;
  }

  /**
   * @returns The logger instance.
   */
  public getLogger(): Logger {
    return this.logger;
  }

  /**
   * Starts the gateway by initializing proxies and listening on the configured port.
   */
  public async start(): Promise<void> {
    await this.app.start();
  }
}
