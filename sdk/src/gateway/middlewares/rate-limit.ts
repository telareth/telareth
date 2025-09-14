import rateLimit from 'express-rate-limit';

import type { GatewayOptionsOutput } from '../schemas/gateway-options.js';

/**
 * Creates a rate limiting middleware based on provided gateway options.
 * @param options Gateway configuration options.
 * @returns Configured rate limiting middleware.
 */
export function createRateLimiter(options: GatewayOptionsOutput) {
  return rateLimit({
    windowMs: options.RATE_LIMIT_WINDOW_MS,
    max: options.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,

    /**
     * Custom handler when rate limit is exceeded.
     * @param req Express request.
     * @param res Express response.
     */
    handler: (req, res) => {
      console.warn(`[WARN] Rate limit exceeded from ${req.ip}`);
      res.status(429).json({
        error: 'Too many requests, please try again later.',
      });
    },
  });
}
