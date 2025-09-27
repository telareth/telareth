import { z } from 'zod';
export const HealthUpdateManyResultSchema = z.object({
  count: z.number()
});