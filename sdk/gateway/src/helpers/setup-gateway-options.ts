import { generateRandomName } from '@telareth/common/helpers';
import type { GatewayOptions, RawGatewayOptions } from '../schemas/gateway.js';
import { parseGatewayOptions } from './parse-gateway-options.js';

/**
 * Configures the Gateway options.
 * @param raw The raw/unsafe Gateway options.
 */
export function setUpGatewayuOptions(raw?: RawGatewayOptions): GatewayOptions {
  const options = parseGatewayOptions(raw);

  return {
    server: {
      name: options.server?.name ?? generateRandomName(3),
      port: Number(options.server?.port ?? '4000'),
      helmet: options.server?.helmet ?? true,
      cors: options.server?.helmet ?? true,
      logger: options.server?.logger ?? true,
      httpLogger: options.server?.httpLogger ?? false,
      rateLimit: options.server?.rateLimit ?? {
        windowMs: 900000,
        limit: 100,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
      },
    },
  };
}
