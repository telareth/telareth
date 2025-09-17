import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import { createGroup } from './create.js';

/**
 * Ensures that a default "service" group exists.
 */
export async function seedGroups() {
  const existing = await redis.hVals(TABLES.GROUPS);
  const found = existing
    .map((e) => JSON.parse(e) as { name: string })
    .find((g) => g.name === 'default-service-group');

  if (!found) {
    await createGroup('default-service-group', []);
  }
}
