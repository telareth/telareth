import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastChecked: z.literal(true).optional()
}).strict();
export const HealthMaxAggregateInputObjectSchema: z.ZodType<Prisma.HealthMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HealthMaxAggregateInputType>;
export const HealthMaxAggregateInputObjectZodSchema = makeSchema();
