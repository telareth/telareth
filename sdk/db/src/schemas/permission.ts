import { z } from 'zod';

/**
 * Defines all possible permission keys.
 * You can expand this with service-specific permissions.
 */
export const PermissionKey = z.enum([
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

export const PermissionSchema = z.object({
  key: PermissionKey,
  description: z.string().optional(),
});

export type Permission = z.infer<typeof PermissionSchema>;
export type PermissionInput = z.input<typeof PermissionSchema>;
export type PermissionOutput = z.infer<typeof PermissionSchema>;
