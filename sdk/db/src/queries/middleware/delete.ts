import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';

/**
 * Deletes a middleware entry from Redis.
 * @param id The unique identifier of the middleware to delete.
 * @returns `true` if the middleware was deleted, `false` if not found.
 */
export async function deleteMiddleware(id: string): Promise<boolean> {
  const result = await redis.hDel(TABLES.MIDDLEWARES, id);
  return result > 0;
}
