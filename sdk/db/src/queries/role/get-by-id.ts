import { redis } from '../../helpers/redis-client.js';
import type { Role } from '../../schemas/role.js';
import { RoleSchema } from '../../schemas/role.js';
import { TABLES } from '../consts/index.js';

/**
 * Fetches a role by its unique identifier.
 *
 * Looks up the role in Redis and validates it against the schema.
 * @param id The unique identifier (UUID) of the role to fetch.
 * @returns The role object if found, otherwise `null`.
 */
export async function getRoleById(id: string): Promise<Role | null> {
  const raw = await redis.hGet(TABLES.ROLES, id);
  return raw ? RoleSchema.parse(JSON.parse(raw)) : null;
}
