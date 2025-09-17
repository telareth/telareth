import { DEFAULT_GROUPS } from '../../consts/group.js';
import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import { createGroup } from './create.js';

/**
 * Ensures that a default "service" group exists.
 */
export async function seedGroups() {
  const existing = await redis.hVals(TABLES.GROUPS);
  const found = existing
    .map((e) => JSON.parse(e) as { name: string })
    .find((g) => g.name === DEFAULT_GROUPS.ADMINS);

  if (!found) {
    await createGroup(DEFAULT_GROUPS.ADMINS, []);
  }
}
