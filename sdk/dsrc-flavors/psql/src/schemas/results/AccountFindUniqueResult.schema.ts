import { z } from 'zod';
export const AccountFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  isActive: z.boolean(),
  emails: z.array(z.unknown()),
  password: z.unknown(),
  passwordId: z.string()
}));