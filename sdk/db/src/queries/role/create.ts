import { randomUUID } from 'crypto';

import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { PermissionKey } from '../../schemas/permission.js';
import type { Role } from '../../schemas/role.js';
import { RoleSchema } from '../../schemas/role.js';

/**
 * Creates a new role with a given set of permissions.
 *
 * Roles define access levels by grouping multiple permission keys.
 * @param name The human-readable name of the role (e.g., "Admin", "Moderator").
 * @param permissions A list of permission keys (e.g., USER_CREATE, SERVICE_UPDATE) assigned to the role.
 * @param isDefault Whether this role is a default system role (cannot be deleted).
 * @returns The created role object after validation and persistence.
 */
export async function createRole(
  name: string,
  permissions: PermissionKey[] = [],
  isDefault = false
): Promise<Role> {
  const role: Role = { id: randomUUID(), name, permissions, isDefault };
  const parsed = RoleSchema.parse(role);
  await redis.hSet(TABLES.ROLES, parsed.id, JSON.stringify(parsed));
  return parsed;
}
