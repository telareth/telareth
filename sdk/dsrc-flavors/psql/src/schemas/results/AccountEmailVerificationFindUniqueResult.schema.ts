import { z } from 'zod';
export const AccountEmailVerificationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional()
}));