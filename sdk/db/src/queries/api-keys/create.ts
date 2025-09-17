import { randomUUID } from 'crypto';

import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { ApiKey } from '../../schemas/api-key.js';
import { ApiKeySchema } from '../../schemas/api-key.js';

/**
 * Creates a new API key entry in Redis.
 * @param data API key data excluding system-generated fields (`id`, `createdAt`, `revoked`, `usageCount`).
 * @returns The created API key record after validation.
 */
export async function createApiKey(
  data: Omit<ApiKey, 'id' | 'createdAt' | 'revoked' | 'usageCount'>
): Promise<ApiKey> {
  const apiKey: ApiKey = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    revoked: false,
    usageCount: 0,
    ...data,
  };

  const parsed = ApiKeySchema.parse(apiKey);
  // Use the API key string as the hash field
  await redis.hSet(TABLES.API_KEYS, parsed.key, JSON.stringify(parsed));
  return parsed;
}
