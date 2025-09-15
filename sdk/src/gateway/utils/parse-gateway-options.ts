import z from 'zod';

import type {
  GatewayOptionsInput,
  GatewayOptionsOutput,
} from '../schemas/gateway-options.js';
import { GatewayConfigSchema } from '../schemas/gateway-options.js';

/**
 * Safe parse process.env defined options.
 * @param options User options defined in the process.env.
 * @returns The parsed options.
 */
export async function parseGatewayOptions(
  options: NodeJS.ProcessEnv | GatewayOptionsInput
): Promise<GatewayOptionsOutput> {
  const result = await GatewayConfigSchema.safeParseAsync(options);
  if (!result.success) {
    console.error(z.prettifyError(result.error));
    process.exit(1);
  }
  return result.data;
}
