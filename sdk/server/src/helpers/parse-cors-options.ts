import type { ParsedCorsOptions, RawCorsOptions } from '../schemas/cors.js';
import { CorsOptionsSchema } from '../schemas/cors.js';

/**
 * Parses the raw/unsafe CORS options.
 * @param raw The raw/unsafe CORS options to parse.
 * @returns The parsed options.
 * @throws "Invalid CORS options" if options do not meet requirements.
 */
export function parseCorsOptions(raw?: RawCorsOptions): ParsedCorsOptions {
  const result = CorsOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid CORS opptions', { cause: result.error });
  }

  return result.data;
}
