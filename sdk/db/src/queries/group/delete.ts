import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';

/**
 * Deletes a group by ID.
 * @param id The UUID of the group to delete.
 * @returns True if the group was deleted, false if it didn’t exist.
 */
export async function deleteGroup(id: string): Promise<boolean> {
  return (await redis.hDel(TABLES.GROUPS, id)) > 0;
}
