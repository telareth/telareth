import z from 'zod';

/**
 * Redis hash keys used as "tables" for different entities.
 * Note: email verification uses simple keys, not hashes.
 */
export const TABLE = {
  ADMINS: 'admins',
  SERVICES: 'services',
  MIDDLEWARES: 'middlewares',
  API_KEYS: 'apiKeys',
  ROLES: 'roles',
  GROUPS: 'groups',
  PERMISSIONS: 'permissions',
  EMAIL_VERIFICATION_PREFIX: 'email-verification:', // key prefix for tokens
} as const;

export const TableSchema = z.enum(Object.values(TABLE));

export type Table = z.infer<typeof TableSchema>;
