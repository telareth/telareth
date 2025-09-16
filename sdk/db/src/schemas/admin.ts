import { z } from 'zod';

export const AdminRole = z.enum(['SUPERADMIN', 'ADMIN']);

export const AdminSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  password: z.string(),
  roles: z.array(AdminRole).default(['ADMIN']),
  emailVerified: z.boolean().default(false),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Admin = z.infer<typeof AdminSchema>;
export type AdminInput = z.input<typeof AdminSchema>;
export type AdminOutput = z.output<typeof AdminSchema>;
