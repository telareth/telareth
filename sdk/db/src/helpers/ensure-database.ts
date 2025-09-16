import { TABLES } from '../consts.js';
import { redis } from './redis-client.js';

/**
 * Ensures that all required Redis hash tables exist.
 *
 * Iterates over all defined tables in {@link TABLES}. If a table
 * does not already exist, it is initialized with a marker entry
 * containing a `createdAt` timestamp.
 */
export async function ensureDatabase(): Promise<void> {
  for (const table of Object.values(TABLES)) {
    const exists = await redis.exists(table);
    if (!exists) {
      await redis.hSet(
        table,
        'init',
        JSON.stringify({ createdAt: new Date().toISOString() })
      );
    }
  }
}
