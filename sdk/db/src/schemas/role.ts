import { z } from 'zod';

import { PermissionSchema } from './permission.js';

export const ROLE_NAME_REGEX = /^[A-Z][A-Z0-9-]*[A-Z0-9]$/;

// Default Roles, cannot be changed by user
export const DEFAULT_ROLE = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
};

export const DefaultRoleSchema = z.literal(Object.values(DEFAULT_ROLE));

// Role
export const RoleSchema = z.union([
  DefaultRoleSchema,
  z.string().regex(ROLE_NAME_REGEX),
]);

// Role Model
export const RoleModelSchema = z.object({
  id: z.uuid(),
  name: RoleSchema, // must be unique
  permissions: z.array(PermissionSchema),
  isDefault: z.boolean().default(false), // true for SUPERADMIN, ADMIN
});

// Role types
export type DefaultRole = z.infer<typeof DefaultRoleSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type RoleInput = z.input<typeof RoleSchema>;
export type RoleOutput = z.output<typeof RoleSchema>;
export type RoleModel = z.infer<typeof RoleModelSchema>;
export type RoleModelInput = z.input<typeof RoleModelSchema>;
export type RoleModelOutput = z.output<typeof RoleModelSchema>;
