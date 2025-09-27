import { z } from 'zod';
export const AccountEmailVerificationCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional()
});