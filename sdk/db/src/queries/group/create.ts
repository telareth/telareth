import { randomUUID } from 'crypto';

import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Group } from '../../schemas/group.js';
import { GroupSchema } from '../../schemas/group.js';
import type { PermissionKey } from '../../schemas/permission.js';

/**
 * Creates a new group with optional permissions.
 *
 * Groups can contain multiple admins and define a set of permissions
 * that apply to all members of the group.
 * @param name The human-readable name of the group (e.g., "Support Team").
 * @param permissions A list of permission keys (e.g., USER_CREATE, SERVICE_UPDATE) granted to the group.
 * @returns The created group object after validation and persistence.
 */
export async function createGroup(
  name: string,
  permissions: PermissionKey[] = []
): Promise<Group> {
  const group: Group = { id: randomUUID(), name, permissions, memberIds: [] };
  const parsed = GroupSchema.parse(group);
  await redis.hSet(TABLES.GROUPS, parsed.id, JSON.stringify(parsed));
  return parsed;
}
