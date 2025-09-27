import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const HealthSumAggregateInputObjectSchema: z.ZodType<Prisma.HealthSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HealthSumAggregateInputType>;
export const HealthSumAggregateInputObjectZodSchema = makeSchema();
