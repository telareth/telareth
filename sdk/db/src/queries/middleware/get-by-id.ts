import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Middleware } from '../../schemas/middleware.js';
import { MiddlewareSchema } from '../../schemas/middleware.js';

/**
 * Retrieves a middleware object from Redis by its unique ID.
 * Validates the stored data against the Middleware schema.
 * @param id The unique identifier of the middleware.
 * @returns The middleware object if found; otherwise `null`.
 */
export async function getMiddlewareById(
  id: string
): Promise<Middleware | null> {
  const raw = await redis.hGet(TABLES.MIDDLEWARES, id);
  if (!raw) {
    return null;
  }
  return MiddlewareSchema.parse(JSON.parse(raw));
}
