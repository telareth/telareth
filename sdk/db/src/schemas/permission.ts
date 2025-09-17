import { z } from 'zod';

/**
 * Supported permission keys across the system.
 */
export const PermissionKeySchema = z.enum([
  'SUPERUSER_CREATE',
  'SUPERUSER_UPDATE',
  'SUPERUSER_DELETE',
  'USER_CREATE',
  'USER_UPDATE',
  'USER_DELETE',
  'USER_ROLE_CREATE',
  'USER_ROLE_UPDATE',
  'USER_ROLE_DELETE',
  'ROLE_CREATE',
  'ROLE_UPDATE',
  'ROLE_DELETE',
  'GROUP_CREATE',
  'GROUP_UPDATE',
  'GROUP_DELETE',
  'SERVICE_CREATE',
  'SERVICE_UPDATE',
  'SERVICE_DELETE',
  'MIDDLEWARE_CREATE',
  'MIDDLEWARE_UPDATE',
  'MIDDLEWARE_DELETE',
  'SERVICE_APIKEYS_CREATE',
  'SERVICE_APIKEYS_UPDATE',
]);

export type PermissionKey = z.infer<typeof PermissionKeySchema>;
export type PermissionKeyInput = z.input<typeof PermissionKeySchema>;
export type PermissionKeyOutput = z.output<typeof PermissionKeySchema>;
