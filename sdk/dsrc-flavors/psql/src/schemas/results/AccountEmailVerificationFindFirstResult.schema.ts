import { z } from 'zod';
export const AccountEmailVerificationFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional()
}));