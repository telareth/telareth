import { z } from 'zod';

import { PermissionKeySchema } from './permission.js';

export const RoleSchema = z.object({
  id: z.uuid(),
  name: z.string(), // e.g., 'ADMIN', 'CUSTOM_ROLE'
  permissions: z.array(PermissionKeySchema),
  isDefault: z.boolean().default(false), // true for SUPERUSER, ADMIN
});

export type Role = z.infer<typeof RoleSchema>;
export type RoleInput = z.input<typeof RoleSchema>;
export type RoleOutput = z.output<typeof RoleSchema>;
