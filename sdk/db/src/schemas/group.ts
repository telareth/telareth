import { z } from 'zod';

import { PermissionKeySchema } from './permission.js';

export const GroupSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  permissions: z.array(PermissionKeySchema),
  memberIds: z.array(z.uuid()),
});

export type Group = z.infer<typeof GroupSchema>;
export type GroupInput = z.input<typeof GroupSchema>;
export type GroupOutput = z.output<typeof GroupSchema>;
