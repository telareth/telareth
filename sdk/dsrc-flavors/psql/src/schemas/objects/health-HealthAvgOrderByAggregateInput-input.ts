import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional()
}).strict();
export const HealthAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthAvgOrderByAggregateInput>;
export const HealthAvgOrderByAggregateInputObjectZodSchema = makeSchema();
