import { randomUUID } from 'crypto';

import { z } from 'zod';

import { PERMISSION, PermissionSchema } from './permission.js';

export const GROUP_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

// Default Groups, cannot be changed by user
export const DEFAULT_GROUP = {
  SUPERADMINS: 'superadmins', // hidden group
  ADMINS: 'admins', // default group, cannot be deleted, permissions can be customized
} as const;

export const DefaultGroupSchema = z.literal(Object.values(DEFAULT_GROUP));

// Group
export const GroupSchema = z.union([
  DefaultGroupSchema,
  z.string().regex(GROUP_NAME_REGEX),
]);

// Group Model
export const GroupModelSchema = z.object({
  id: z.uuid(),
  name: GroupSchema, // Must be unique
  permissions: z.array(PermissionSchema),
  memberIds: z.array(z.uuid()).default([]),
});

// Group types
export type DefaultGroup = z.infer<typeof DefaultGroupSchema>;
export type Group = z.infer<typeof GroupSchema>;
export type GroupInput = z.input<typeof GroupSchema>;
export type GroupOutput = z.output<typeof GroupSchema>;
export type GroupModel = z.infer<typeof GroupModelSchema>;
export type GroupModelInput = z.input<typeof GroupModelSchema>;
export type GroupModelOutput = z.output<typeof GroupModelSchema>;

// Default Group Model raw values
export const GROUP_MODEL_SUPERADMIN: GroupModelInput = {
  id: randomUUID(),
  name: DEFAULT_GROUP.SUPERADMINS,
  permissions: [...PERMISSION],
};

export const GROUP_MODEL_ADMINS: GroupModelInput = {
  id: randomUUID(),
  name: DEFAULT_GROUP.ADMINS,
  permissions: [...PERMISSION],
};

// Default Group Model parsed values
export const groupModelSuperadmins: GroupModelOutput = GroupModelSchema.parse(
  GROUP_MODEL_SUPERADMIN
);

export const groupModelAdmins: GroupModelOutput =
  GroupModelSchema.parse(GROUP_MODEL_ADMINS);
