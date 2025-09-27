import { z } from 'zod';
export const AccountEmailVerificationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional()
}));