import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { ApiKey } from '../../schemas/api-key.js';
import { ApiKeySchema } from '../../schemas/api-key.js';

/**
 * Retrieves an API key record from Redis.
 * @param key The API key string to look up.
 * @returns The matching API key record, or `null` if not found.
 */
export async function getApiKey(key: string): Promise<ApiKey | null> {
  const raw = await redis.hGet(TABLES.API_KEYS, key);
  return raw ? ApiKeySchema.parse(JSON.parse(raw)) : null;
}
