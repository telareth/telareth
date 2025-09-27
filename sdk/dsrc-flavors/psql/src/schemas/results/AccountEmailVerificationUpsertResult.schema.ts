import { z } from 'zod';
export const AccountEmailVerificationUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional()
});