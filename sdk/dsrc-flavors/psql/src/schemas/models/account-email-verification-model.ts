import { z } from 'zod';

export const AccountEmailVerificationModel = z.object({
  id: z.string(),
  createdAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
});

export type AccountEmailVerificationType = z.infer<typeof AccountEmailVerificationModel>;
