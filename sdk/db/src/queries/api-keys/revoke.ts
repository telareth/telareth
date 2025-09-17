import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { ApiKey } from '../../schemas/api-key.js';
import { getApiKey } from './get-by-key.js';

/**
 * Revokes an API key (marks it as no longer valid).
 * @param key The API key string to revoke.
 * @returns The updated API key record, or `null` if not found.
 */
export async function revokeApiKey(key: string): Promise<ApiKey | null> {
  const existing = await getApiKey(key);
  if (!existing) return null;

  const updated: ApiKey = { ...existing, revoked: true };
  await redis.hSet(TABLES.API_KEYS, updated.key, JSON.stringify(updated));
  return updated;
}
