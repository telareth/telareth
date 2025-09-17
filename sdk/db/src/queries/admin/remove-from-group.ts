import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Group } from '../../schemas/group.js';
import { GroupSchema } from '../../schemas/group.js';

/**
 * Removes an admin from a group.
 * @param groupId The UUID of the group.
 * @param adminId The UUID of the admin to remove.
 * @returns The updated group object.
 * @throws If the group does not exist.
 */
export async function removeAdminFromGroup(
  groupId: string,
  adminId: string
): Promise<Group> {
  const raw = await redis.hGet(TABLES.GROUPS, groupId);
  if (!raw) throw new Error('Group not found');

  const group: Group = JSON.parse(raw);
  group.memberIds = group.memberIds.filter((id) => id !== adminId);

  const parsed = GroupSchema.parse(group);
  await redis.hSet(TABLES.GROUPS, groupId, JSON.stringify(parsed));
  return parsed;
}
