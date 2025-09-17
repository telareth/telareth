import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Group } from '../../schemas/group.js';
import { GroupSchema } from '../../schemas/group.js';

/**
 * Updates fields of an existing group.
 * @param id The UUID of the group to update.
 * @param updates Partial group fields to apply (name, permissions, memberIds).
 * @returns The updated group.
 * @throws If the group does not exist.
 */
export async function updateGroup(
  id: string,
  updates: Partial<Omit<Group, 'id'>>
): Promise<Group> {
  const raw = await redis.hGet(TABLES.GROUPS, id);
  if (!raw) throw new Error('Group not found');

  const existing: Group = JSON.parse(raw);
  const updated: Group = {
    ...existing,
    ...updates,
  };

  const parsed = GroupSchema.parse(updated);
  await redis.hSet(TABLES.GROUPS, id, JSON.stringify(parsed));
  return parsed;
}
