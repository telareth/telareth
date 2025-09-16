import { getPrismaClient } from './client.js';

/**
 * Wait until Postgres is ready by repeatedly querying it.
 * @param retries Number of times to retry before failing.
 * @param interval Milliseconds to wait between retries.
 */
export async function waitForDatabase(
  retries = 20,
  interval = 2000
): Promise<void> {
  const prisma = getPrismaClient();

  for (let i = 0; i < retries; i++) {
    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('[INFO] Database is ready ✅');
      return;
    } catch (_err) {
      console.warn(
        `[WARN] Database not ready, retrying in ${interval}ms (${i + 1}/${retries})`
      );
      await new Promise((res) => setTimeout(res, interval));
    }
  }
  throw new Error('[ERROR] Database did not become ready');
}
