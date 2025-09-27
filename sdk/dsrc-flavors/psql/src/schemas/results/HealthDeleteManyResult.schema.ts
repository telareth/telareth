import { z } from 'zod';
export const HealthDeleteManyResultSchema = z.object({
  count: z.number()
});