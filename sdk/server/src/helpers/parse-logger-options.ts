import type {
  ParsedLoggerOptions,
  RawLoggerOptions,
} from '../schemas/logger.js';
import { LoggerOptionsSchema } from '../schemas/logger.js';

/**
 * Parses raw/unsafe Logger options.
 * @param raw The raw/unsafe Logger options.
 * @returns The parsed options.
 * @throws "Invalid Logger options" if options do not meet requirements.
 */
export function parseLoggerOptions(raw: RawLoggerOptions): ParsedLoggerOptions {
  const result = LoggerOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid Logger options', { cause: result.error });
  }

  return result.data;
}
