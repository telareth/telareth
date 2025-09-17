import { z } from 'zod';

import { PermissionKey } from './permission.js';

export const GroupSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  permissions: z.array(PermissionKey).default([]),
  memberIds: z.array(z.uuid()).default([]), // admin IDs
});

export type Group = z.infer<typeof GroupSchema>;
export type GroupInput = z.input<typeof GroupSchema>;
export type GroupOutput = z.output<typeof GroupSchema>;
