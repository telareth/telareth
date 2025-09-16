import type { RedisClientType } from 'redis';
import { createClient } from 'redis';

import { REDIS_URL } from '../consts.js';

/**
 * Redis client instance.
 * Connects to the URL defined in `REDIS_URL` or defaults to `redis://localhost:6379`.
 */
export const redis: RedisClientType = createClient({
  url: REDIS_URL,
});
