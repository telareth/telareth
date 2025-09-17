import { TABLES } from '../../consts.js';
import { redis } from '../../helpers/redis-client.js';
import type { Service } from '../../schemas/service.js';
import { ServiceSchema } from '../../schemas/service.js';

/**
 * Lists all services stored in Redis.
 * @returns An array of all services.
 */
export async function listServices(): Promise<Service[]> {
  const entries = await redis.hGetAll(TABLES.SERVICES);
  return Object.values(entries).map((raw) =>
    ServiceSchema.parse(JSON.parse(raw))
  );
}
