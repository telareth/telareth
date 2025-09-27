import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastChecked: z.literal(true).optional()
}).strict();
export const HealthMinAggregateInputObjectSchema: z.ZodType<Prisma.HealthMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HealthMinAggregateInputType>;
export const HealthMinAggregateInputObjectZodSchema = makeSchema();
