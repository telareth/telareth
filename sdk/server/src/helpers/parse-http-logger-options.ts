import type {
  ParsedHttpLoggerOptions,
  RawHttpLoggerOptions,
} from '../schemas/http-logger.js';
import { HttpLoggerOptionsSchema } from '../schemas/http-logger.js';

/**
 * Parses raw/unsafe HTTP-Logger options.
 * @param raw The raw/unsafe HTTP-Logger options.
 * @returns The parsed options.
 * @throws "Invalid HTTP-Logger options" if options do not meet requirements.
 */
export function parseHttpLoggerOptions(
  raw?: RawHttpLoggerOptions
): ParsedHttpLoggerOptions {
  const result = HttpLoggerOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid HTTP-Logger options', { cause: result.error });
  }

  return result.data;
}
