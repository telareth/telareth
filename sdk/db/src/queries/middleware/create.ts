import { randomUUID } from 'crypto';

import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Middleware } from '../../schemas/middleware.js';
import { MiddlewareSchema } from '../../schemas/middleware.js';

/**
 * Creates a new middleware entry and persists it in Redis.
 * Automatically sets `id`, `createdAt`, and `updatedAt`.
 * Validates the entry against the Middleware schema before storage.
 * @param data The middleware data without `id`, `createdAt`, or `updatedAt`.
 * @returns The validated middleware object as stored in Redis.
 */
export async function createMiddleware(
  data: Omit<Middleware, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Middleware> {
  const now = new Date().toISOString();

  const middleware: Middleware = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...data,
  };

  const parsed = MiddlewareSchema.parse(middleware);
  await redis.hSet(TABLES.MIDDLEWARES, parsed.id, JSON.stringify(parsed));
  return parsed;
}
