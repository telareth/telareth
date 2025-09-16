import { randomUUID } from 'crypto';

import { redis } from 'src/helpers/redis-client.js';
import type { Service } from 'src/schemas/service.js';
import { ServiceSchema } from 'src/schemas/service.js';

import { TABLES } from '../../consts.js';

/**
 * Creates a new service and stores it in Redis.
 * @param data Service data without `id`, `createdAt` or `updatedAt`.
 * @returns The newly created service object.
 */
export async function createService(
  data: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Service> {
  const service: Service = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...data,
  };

  const parsed = ServiceSchema.parse(service);
  await redis.hSet(TABLES.SERVICES, parsed.id, JSON.stringify(parsed));
  return parsed;
}
