import { z } from 'zod';
export const AccountEmailDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  isPrimary: z.boolean(),
  account: z.unknown().optional(),
  accountId: z.string().optional(),
  verification: z.unknown().optional(),
  verificationId: z.string().optional()
}));