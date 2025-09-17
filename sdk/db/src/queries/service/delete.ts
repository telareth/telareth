import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';

/**
 * Deletes a service by ID.
 * @param id The UUID of the service to delete.
 * @returns True if the service was deleted, false otherwise.
 */
export async function deleteService(id: string): Promise<boolean> {
  return (await redis.hDel(TABLES.SERVICES, id)) > 0;
}
