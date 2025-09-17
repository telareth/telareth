import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Service } from '../../schemas/service.js';
import { ServiceSchema } from '../../schemas/service.js';

/**
 * Updates an existing service.
 * @param id The UUID of the service.
 * @param updates Partial service fields to apply.
 * @returns The updated service object.
 * @throws If the service does not exist.
 */
export async function updateService(
  id: string,
  updates: Partial<Omit<Service, 'id'>>
): Promise<Service> {
  const raw = await redis.hGet(TABLES.SERVICES, id);
  if (!raw) throw new Error('Service not found');

  const existing: Service = JSON.parse(raw);
  const updated: Service = { ...existing, ...updates };

  const parsed = ServiceSchema.parse(updated);
  await redis.hSet(TABLES.SERVICES, id, JSON.stringify(parsed));
  return parsed;
}
