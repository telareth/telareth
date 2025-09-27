import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastChecked: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const HealthCountAggregateInputObjectSchema: z.ZodType<Prisma.HealthCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HealthCountAggregateInputType>;
export const HealthCountAggregateInputObjectZodSchema = makeSchema();
