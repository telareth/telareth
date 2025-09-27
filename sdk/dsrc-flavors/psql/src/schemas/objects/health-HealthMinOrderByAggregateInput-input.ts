import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  status: SortOrder.optional(),
  lastChecked: SortOrder.optional()
}).strict();
export const HealthMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthMinOrderByAggregateInput>;
export const HealthMinOrderByAggregateInputObjectZodSchema = makeSchema();
