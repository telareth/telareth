import { z } from 'zod';
export const AccountEmailVerificationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    email: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));