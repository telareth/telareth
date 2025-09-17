import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Role } from '../../schemas/role.js';
import { RoleSchema } from '../../schemas/role.js';

/**
 * Updates an existing role.
 * @param id The UUID of the role.
 * @param updates Partial role fields to apply (name, permissions).
 * @returns The updated role.
 * @throws If the role does not exist.
 */
export async function updateRole(
  id: string,
  updates: Partial<Omit<Role, 'id'>>
): Promise<Role> {
  const raw = await redis.hGet(TABLES.ROLES, id);
  if (!raw) throw new Error('Role not found');

  const existing: Role = JSON.parse(raw);
  const updated: Role = { ...existing, ...updates };

  const parsed = RoleSchema.parse(updated);
  await redis.hSet(TABLES.ROLES, id, JSON.stringify(parsed));
  return parsed;
}
