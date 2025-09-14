import { getPrismaClient } from '../../client.js';
import type { Service } from '../../types/client.js';

/**
 * Fetches all active services with their API keys.
 */
export async function fetchActiveServices(): Promise<Service[]> {
  const prisma = getPrismaClient();
  return prisma.service.findMany({
    where: { active: true },
    include: { ApiKey: true },
  });
}
