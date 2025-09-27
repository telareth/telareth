import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const HealthAvgAggregateInputObjectSchema: z.ZodType<Prisma.HealthAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HealthAvgAggregateInputType>;
export const HealthAvgAggregateInputObjectZodSchema = makeSchema();
