import type {
  ParsedHelmetOptions,
  RawHelmetOptions,
} from '../schemas/helmet.js';
import { HelmetOptionsSchema } from '../schemas/helmet.js';

/**
 * Parses the raw/unsafe Helmet option.
 * @param raw The raw/unsafe Helmet option.
 * @returns The parsed options.
 * @throws "Invalid Helmet options" if options do not meet requirements.
 */
export function parseHelmetOptions(
  raw?: RawHelmetOptions
): ParsedHelmetOptions {
  const result = HelmetOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid Helmet options', { cause: result.error });
  }

  return result.data;
}
