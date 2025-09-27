import { z } from 'zod';

export const AccountModel = z.object({
  id: z.string(),
  createdAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
  updatedAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
  deletedAt: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, "Invalid ISO datetime").transform(v => new Date(v)),
  isActive: z.boolean().default(true),
  passwordId: z.string(),
});

export type AccountType = z.infer<typeof AccountModel>;
