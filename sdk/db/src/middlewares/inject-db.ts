import type { NextFunction, Request, Response } from 'express';

import { redis } from '../helpers/redis-client.js';

/**
 * Middleware that injects the Redis client into the request object.
 * Allows downstream handlers to access Redis via `req.redis`.
 * @param req Express request object.
 * @param _res Express response object (unused).
 * @param next Express next function.
 */
export function injectDbMiddleware(
  req: Request & { redis?: typeof redis },
  _res: Response,
  next: NextFunction
): void {
  req.redis = redis;
  next();
}
