import z from 'zod';

import type { PortInput, PortOutput } from '../schemas/port.js';
import { PortSchema } from '../schemas/port.js';

/**
 * Asyncronously safe-parse the PORT value, usually coming from process.env.PORT.
 * @param raw Default to 4000. Either a string or a number starting from 3000 up to 65535. Stop process if the port is invalid or used by another service.
 * @example
 * ```ts
 * const PORT = await parsePort(process.env.GATEWAY_PORT)
 * ```
 */
export async function parsePort(raw: PortInput): Promise<PortOutput> {
  const result = await PortSchema.safeParseAsync(raw);

  if (!result.success) {
    console.error(z.prettifyError(result.error));
    process.exit(1);
  }

  return result.data;
}
