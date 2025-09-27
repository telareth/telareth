import { z } from 'zod';
export const AccountAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    isActive: z.number(),
    emails: z.number(),
    password: z.number(),
    passwordId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    passwordId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    passwordId: z.string().nullable()
  }).nullable().optional()});