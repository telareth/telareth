export const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379';

/**
 * Redis hash keys used as "tables" for different entities.
 * Note: email verification uses simple keys, not hashes.
 */
export const TABLES = {
  ADMINS: 'admins',
  SERVICES: 'services',
  MIDDLEWARES: 'middlewares',
  API_KEYS: 'apiKeys',
  ROLES: 'roles', // future: store custom roles
  GROUPS: 'groups', // future: store groups
  PERMISSIONS: 'permissions', // future: store permissions
  EMAIL_VERIFICATION_PREFIX: 'email-verification:', // key prefix for tokens
} as const;

export const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
export const JWT_EXPIRES_IN = '1h';
