import { redis } from './redis-client.js';

/**
 * Connects to the Redis server if not already connected.
 * Ensures that the `redis` client is ready for operations.
 */
export async function connectRedis(): Promise<void> {
  if (!redis.isOpen) {
    await redis.connect();
  }
}
