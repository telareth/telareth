import { redis } from '../../helpers/redis-client.js';
import { TABLES } from '../consts/index.js';

/**
 * Deletes a role by ID.
 * @param id The UUID of the role to delete.
 * @returns True if the role was deleted, false otherwise.
 */
export async function deleteRole(id: string): Promise<boolean> {
  return (await redis.hDel(TABLES.ROLES, id)) > 0;
}
