import { DEFAULT_ROLES, TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { PermissionKey } from '../../schemas/permission.js';
import { createRole } from './create.js';

/**
 * Ensures that default roles exist (SUPERADMIN, ADMIN, MODERATOR).
 * Creates them with sensible default permissions if missing.
 */
export async function seedRoles() {
  const roles = [
    {
      name: DEFAULT_ROLES.SUPERADMIN,
      permissions: [
        'SUPERUSER_CREATE',
        'SUPERUSER_UPDATE',
        'SUPERUSER_DELETE',
      ] as PermissionKey[],
      isDefault: true,
    },
    {
      name: DEFAULT_ROLES.ADMIN,
      permissions: [
        'USER_CREATE',
        'USER_UPDATE',
        'USER_DELETE',
      ] as PermissionKey[],
      isDefault: true,
    },
  ];

  for (const role of roles) {
    const existing = await redis.hVals(TABLES.ROLES);
    const found = existing
      .map((e) => JSON.parse(e) as { name: string })
      .find((r) => r.name === role.name);

    if (!found) {
      await createRole(role.name, role.permissions, role.isDefault);
    }
  }
}
