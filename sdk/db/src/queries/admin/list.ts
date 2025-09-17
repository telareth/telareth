import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Returns all admins from Redis.
 */
export async function listAdmins(): Promise<Admin[]> {
  const entries = await redis.hVals(TABLES.ADMINS);
  return entries.map((e) => AdminSchema.parse(JSON.parse(e)));
}
