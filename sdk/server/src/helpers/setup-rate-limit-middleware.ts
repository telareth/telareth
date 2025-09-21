import type { Application } from 'express';
import rateLimit from 'express-rate-limit';

import type { RawRateLimitOptions } from '../schemas/rate-limiter.js';
import { DEFAULT_RATE_LIMIT_OPTIONS } from '../schemas/rate-limiter.js';
import { parseRateLimitOptions } from './parse-rate-limit-options.js';

/**
 * Configures the Rate-Limit middleware.
 * @param app The App instance.
 * @param options The raw/unsafe Rate-Limit middleware options.
 */
export function setupRateLimitMiddleware(
  app: Application,
  options: RawRateLimitOptions
) {
  const middlewareOptions = parseRateLimitOptions(options);

  if (middlewareOptions) {
    let limiter;

    if (middlewareOptions === true) {
      limiter = rateLimit(DEFAULT_RATE_LIMIT_OPTIONS);
    } else {
      limiter = rateLimit(middlewareOptions);
    }

    app.use(limiter);
  }
}
