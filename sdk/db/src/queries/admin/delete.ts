import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';

/**
 * Deletes an admin by ID from Redis.
 * @param id The UUID representing the admin.
 * @returns True if deleted, false otherwise.
 */
export async function deleteAdmin(id: string): Promise<boolean> {
  const result = await redis.hDel(TABLES.ADMINS, id);
  return result > 0;
}
