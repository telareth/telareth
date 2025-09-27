import { z } from 'zod';
export const AccountPasswordCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  account: z.unknown().optional()
});