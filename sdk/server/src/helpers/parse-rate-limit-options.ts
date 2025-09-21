import type {
  ParsedRateLimitOptions,
  RawRateLimitOptions,
} from '../schemas/rate-limiter.js';
import { RateLimitOptionsSchema } from '../schemas/rate-limiter.js';

/**
 * Parses raw/unsafe Rate-Limit options.
 * @param raw The raw/unsafe Rate-Limit middleware options.
 * @returns The parsed options.
 * @throws "Invalid Rate-Limit options" if options do not meet requirements.
 */
export function parseRateLimitOptions(
  raw?: RawRateLimitOptions
): ParsedRateLimitOptions {
  const result = RateLimitOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid Rate-Limit options', { cause: result.error });
  }

  return result.data;
}
