import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  status: SortOrder.optional(),
  lastChecked: SortOrder.optional(),
  metadata: SortOrder.optional()
}).strict();
export const HealthCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthCountOrderByAggregateInput>;
export const HealthCountOrderByAggregateInputObjectZodSchema = makeSchema();
