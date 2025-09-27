import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  status: SortOrder.optional(),
  lastChecked: SortOrder.optional()
}).strict();
export const HealthMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthMaxOrderByAggregateInput>;
export const HealthMaxOrderByAggregateInputObjectZodSchema = makeSchema();
