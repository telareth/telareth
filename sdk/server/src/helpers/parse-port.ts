import type { RawPort } from '../schemas/port.js';
import { PortSchema } from '../schemas/port.js';

/**
 * Asyncronously safe-parse the PORT value, usually coming from process.env.PORT.
 * @param raw Default to 4000. Either a string or a number starting from 3000 up to 65535. Stop process if the port is invalid or used by another service.
 * @returns A result object with a `success` boolean, and either the parsed data or an error.
 * @example
 * ```ts
 * const result = await parsePort(process.env.PORT)
 *
 * if (!result.success) {
 *   console.error(result.error);
 *   throw new Error("[FATAL] Failed to parse PORT")
 * }
 *
 * const port = result.data;
 * ```
 */
export async function parsePort(raw: RawPort) {
  return await PortSchema.safeParseAsync(raw);
}
