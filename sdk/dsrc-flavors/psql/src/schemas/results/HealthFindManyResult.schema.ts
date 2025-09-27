import { z } from 'zod';
export const HealthFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  status: z.unknown(),
  lastChecked: z.date(),
  metadata: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});