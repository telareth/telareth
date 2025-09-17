import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Fetches an admin record by ID.
 * @param id The UUID of the admin to retrieve.
 * @returns The matching admin record, or `null` if not found.
 */
export async function getAdminById(id: string): Promise<Admin | null> {
  const raw = await redis.hGet(TABLES.ADMINS, id);

  return raw ? AdminSchema.parse(JSON.parse(raw)) : null;
}
