import type {
  ParsedGatewayOptions,
  RawGatewayOptions,
} from '../schemas/gateway.js';
import { GatewayOptionsSchema } from '../schemas/gateway.js';

/**
 * Parses the Gateway options..
 * @param raw The raw/unsafe Gateway options.
 * @returns The parsed options.
 */
export function parseGatewayOptions(
  raw?: RawGatewayOptions
): ParsedGatewayOptions {
  const result = GatewayOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid Gateway options', { cause: result.error });
  }

  return result.data;
}
