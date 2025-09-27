import { z } from 'zod';
export const HealthFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  status: z.unknown(),
  lastChecked: z.date(),
  metadata: z.unknown().optional()
}));