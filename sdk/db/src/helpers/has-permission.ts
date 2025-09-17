import { TABLES } from '../consts/table.js';
import { redis } from './redis-client.js';

/**
 * Checks if an admin has a specific permission via roles or groups.
 * @param admin The admin object containing role and group references.
 * @param admin.roles Array of role IDs assigned to the admin.
 * @param admin.groups Array of group IDs the admin belongs to.
 * @param permission The permission key to check for.
 * @returns True if the admin has the specified permission, false otherwise.
 */
export async function hasPermission(
  admin: { roles: string[]; groups: string[] },
  permission: string
): Promise<boolean> {
  // Fetch roles and groups from Redis
  const allRoleKeys = await Promise.all(
    admin.roles.map((id) => redis.hGet(TABLES.ROLES, id))
  );
  const allGroupKeys = await Promise.all(
    admin.groups.map((id) => redis.hGet(TABLES.GROUPS, id))
  );

  const rolePermissions = allRoleKeys
    .filter((r): r is string => Boolean(r))
    .flatMap((r) => {
      try {
        return JSON.parse(r).permissions ?? [];
      } catch {
        return [];
      }
    });

  const groupPermissions = allGroupKeys
    .filter((g): g is string => Boolean(g))
    .flatMap((g) => {
      try {
        return JSON.parse(g).permissions ?? [];
      } catch {
        return [];
      }
    });

  return (
    rolePermissions.includes(permission) ||
    groupPermissions.includes(permission)
  );
}
