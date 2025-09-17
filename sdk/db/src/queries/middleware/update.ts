import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Middleware } from '../../schemas/middleware.js';
import { MiddlewareSchema } from '../../schemas/middleware.js';

/**
 * Updates an existing middleware entry in Redis.
 * Refreshes the `updatedAt` timestamp and validates the entry
 * before persisting it.
 * @param id The unique identifier of the middleware to update.
 * @param updates The fields to update.
 * @returns The updated middleware object, or `null` if not found.
 */
export async function updateMiddleware(
  id: string,
  updates: Partial<Omit<Middleware, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Middleware | null> {
  const raw = await redis.hGet(TABLES.MIDDLEWARES, id);
  if (!raw) {
    return null;
  }

  const existing = MiddlewareSchema.parse(JSON.parse(raw));
  const updated: Middleware = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const parsed = MiddlewareSchema.parse(updated);
  await redis.hSet(TABLES.MIDDLEWARES, parsed.id, JSON.stringify(parsed));

  return parsed;
}
