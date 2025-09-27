import { z } from 'zod';
export const HealthCreateManyResultSchema = z.object({
  count: z.number()
});