import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { ApiKey } from '../../schemas/api-key.js';
import { getApiKey } from './get-by-key.js';

/**
 * Increments the usage count of an API key and updates its last used timestamp.
 * @param key The API key string to update.
 * @returns The updated API key record, or `null` if not found.
 */
export async function incrementUsage(key: string): Promise<ApiKey | null> {
  const existing = await getApiKey(key);
  if (!existing) return null;

  const updated: ApiKey = {
    ...existing,
    usageCount: existing.usageCount + 1,
    lastUsedAt: new Date().toISOString(),
  };

  await redis.hSet(TABLES.API_KEYS, updated.key, JSON.stringify(updated));
  return updated;
}
