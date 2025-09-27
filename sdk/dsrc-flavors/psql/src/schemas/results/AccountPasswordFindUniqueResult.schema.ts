import { z } from 'zod';
export const AccountPasswordFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  account: z.unknown().optional()
}));