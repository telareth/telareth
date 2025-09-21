import type { Application } from 'express';
import type { ParsedAppOptions } from 'src/schemas/app.js';

import { rateLimit } from '../schemas/rate-limiter.js';

/**
 * Configures and sets up the rate limit middleware.
 * @param app The app instance.
 * @param options The parsed rate limit options.
 */
export function setupRateLimitMiddleware(
  app: Application,
  options: ParsedAppOptions
) {
  if (options.rateLimit) {
    const limiter = rateLimit(options.rateLimit);

    app.use(limiter);
  }
}
