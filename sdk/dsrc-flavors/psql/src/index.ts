import { PrismaClient } from './dsrc/client.js';

export type { Prisma as Client } from './dsrc/client.js';

/**
 * Creates a new Client instance.
 */
export function createClient() {
  return new PrismaClient();
}
