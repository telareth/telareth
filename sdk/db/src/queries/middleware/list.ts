import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Middleware } from '../../schemas/middleware.js';
import { MiddlewareSchema } from '../../schemas/middleware.js';

/**
 * Lists all middlewares, optionally filtered by service ID.
 * @param serviceId If provided, only middlewares for this service are returned.
 * @returns An array of middleware records.
 */
export async function listMiddlewares(
  serviceId?: string
): Promise<Middleware[]> {
  const entries = await redis.hGetAll(TABLES.MIDDLEWARES);
  const parsed = Object.values(entries).map((raw) =>
    MiddlewareSchema.parse(JSON.parse(raw))
  );
  return serviceId ? parsed.filter((m) => m.serviceId === serviceId) : parsed;
}
