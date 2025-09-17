import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Service } from '../../schemas/service.js';
import { ServiceSchema } from '../../schemas/service.js';

/**
 * Retrieves a service object from Redis by its unique ID.
 * Validates the stored data against the Service schema.
 * @param id The unique identifier of the service.
 * @returns The service object if found; otherwise, `null`.
 */
export async function getServiceById(id: string): Promise<Service | null> {
  const raw = await redis.hGet(TABLES.SERVICES, id);
  return raw ? ServiceSchema.parse(JSON.parse(raw)) : null;
}
