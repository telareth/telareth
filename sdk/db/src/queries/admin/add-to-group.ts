import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Group } from '../../schemas/group.js';
import { GroupSchema } from '../../schemas/group.js';

/**
 * Adds an admin to a specific group.
 *
 * Ensures the admin is not already a member of the group
 * before adding them, then persists the updated group in Redis.
 * @param groupId The unique identifier of the group.
 * @param adminId The unique identifier of the admin to add.
 * @returns The updated group object after saving.
 * @throws If the group does not exist.
 */
export async function addAdminToGroup(
  groupId: string,
  adminId: string
): Promise<Group> {
  const raw = await redis.hGet(TABLES.GROUPS, groupId);
  if (!raw) throw new Error('Group not found');

  const group: Group = JSON.parse(raw);
  if (!group.memberIds.includes(adminId)) group.memberIds.push(adminId);

  const parsed = GroupSchema.parse(group);
  await redis.hSet(TABLES.GROUPS, groupId, JSON.stringify(parsed));
  return parsed;
}
