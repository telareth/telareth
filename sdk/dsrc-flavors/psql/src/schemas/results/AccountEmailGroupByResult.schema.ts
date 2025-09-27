import { z } from 'zod';
export const AccountEmailGroupByResultSchema = z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  isPrimary: z.boolean(),
  accountId: z.string(),
  verificationId: z.string(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    email: z.number(),
    isPrimary: z.number(),
    account: z.number(),
    accountId: z.number(),
    verification: z.number(),
    verificationId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    email: z.string().nullable(),
    accountId: z.string().nullable(),
    verificationId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    email: z.string().nullable(),
    accountId: z.string().nullable(),
    verificationId: z.string().nullable()
  }).nullable().optional()
}));