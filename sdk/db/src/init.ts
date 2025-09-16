import { connectRedis } from './helpers/connect-redis.js';
import { ensureDatabase } from './helpers/ensure-database.js';

/**
 * Initializes the Redis connection and ensures all
 * required collections (tables) exist.
 *
 * Call this once at application startup.
 */
export async function initDb() {
  await connectRedis();
  await ensureDatabase();
  console.log('[db] Redis connected and database initialized');
}
