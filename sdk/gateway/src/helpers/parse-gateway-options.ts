import type { RawGatewayOptions } from '../schemas/gateway.js';
import { GatewayOptionsSchema } from '../schemas/gateway.js';

/**
 * Asyncronously safe-parse the Gateway options, usually coming from process.env.
 * @param raw Raw Gateway options object.
 * @returns A result object with a `success` boolean, and either the parsed data or an error.
 * @example
 * ```ts
 * const result = await parseGatewayOptions({
 *   name: 'my-gateway'
 *   port: 4000
 * })
 *
 * if (!result.success) {
 *   console.error(result.error);
 *   throw new Error("[FATAL] Failed to parse Gateway options")
 * }
 *
 * const options = result.data;
 * ```
 */
export async function parseGatewayOptions(raw: RawGatewayOptions) {
  return await GatewayOptionsSchema.safeParseAsync(raw);
}
