import { z } from 'zod';
export const HealthGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  lastChecked: z.date(),
  metadata: z.unknown(),
  _count: z.object({
    id: z.number(),
    status: z.number(),
    lastChecked: z.number(),
    metadata: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    lastChecked: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    lastChecked: z.date().nullable()
  }).nullable().optional()
}));