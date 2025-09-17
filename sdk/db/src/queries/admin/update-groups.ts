import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Updates the groups an admin belongs to.
 * @param adminId The UUID of the admin.
 * @param groupIds The list of group IDs to assign.
 * @returns The updated admin object.
 * @throws If the admin does not exist.
 */
export async function updateAdminGroups(
  adminId: string,
  groupIds: string[]
): Promise<Admin> {
  const raw = await redis.hGet(TABLES.ADMINS, adminId);
  if (!raw) throw new Error('Admin not found');

  const admin: Admin = JSON.parse(raw);
  const updated: Admin = { ...admin, groups: groupIds };

  const parsed = AdminSchema.parse(updated);
  await redis.hSet(TABLES.ADMINS, adminId, JSON.stringify(parsed));
  return parsed;
}
