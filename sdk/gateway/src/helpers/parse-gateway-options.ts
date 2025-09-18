import z from 'zod';

import type {
  GatewayOptionsInput,
  GatewayOptionsOutput,
} from '../schemes/gateway-options.js';
import { GatewayOptionsSchema } from '../schemes/gateway-options.js';

/**
 * Asyncronously safe-parse Gateway options.
 * @param raw An object representing the Gateway options, some of them usualluy comes from process.env.
 */
export async function parseGatewayOptions(
  raw: GatewayOptionsInput
): Promise<GatewayOptionsOutput> {
  const result = await GatewayOptionsSchema.safeParseAsync(raw);

  if (!result.success) {
    console.error(z.prettifyError(result.error));
    process.exit(1);
  }

  return result.data;
}
