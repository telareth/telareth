import type { RawAppOptions } from '../schemas/app.js';
import { AppOptionsSchema } from '../schemas/app.js';

/**
 * Asyncronously safe-parse the App options, usually coming from process.env.PORT.
 * @param raw Raw App options object.
 * @returns A result object with a `success` boolean, and either the parsed data or an error.
 * @example
 * ```ts
 * const result = await parseAppOptions({
 *   name: 'my-app1'
 *   port: 4000
 * })
 *
 * if (!result.success) {
 *   console.error(result.error);
 *   throw new Error("[FATAL] Failed to parse App options")
 * }
 *
 * const options = result.data;
 * ```
 */
export async function parseAppOptions(raw: RawAppOptions) {
  return await AppOptionsSchema.safeParseAsync(raw);
}
