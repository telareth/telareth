import { z } from 'zod';

import { GroupSchema } from './group.js';

export const AdminModelSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  password: z.string(),
  roles: z.array(z.string()).default([]),
  groups: z.array(GroupSchema).default([]),
  emailVerified: z.boolean().default(false),
  isActive: z.boolean().default(true),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type AdminModel = z.infer<typeof AdminModelSchema>;
export type AdminModelInput = z.input<typeof AdminModelSchema>;
export type AdminModelOutput = z.output<typeof AdminModelSchema>;
