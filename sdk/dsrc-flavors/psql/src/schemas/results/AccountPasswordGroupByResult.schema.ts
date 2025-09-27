import { z } from 'zod';
export const AccountPasswordGroupByResultSchema = z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    password: z.number(),
    account: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    password: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    password: z.string().nullable()
  }).nullable().optional()
}));