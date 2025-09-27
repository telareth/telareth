import { z } from 'zod';

export const AccountEmailModel = z.object({
  id: z.string(),
  createdAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
  updatedAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
  email: z.string(),
  isPrimary: z.boolean(),
  accountId: z.string().nullish(),
  verificationId: z.string().nullish(),
});

export type AccountEmailType = z.infer<typeof AccountEmailModel>;
