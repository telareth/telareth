import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional()
}).strict();
export const HealthSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthSumOrderByAggregateInput>;
export const HealthSumOrderByAggregateInputObjectZodSchema = makeSchema();
