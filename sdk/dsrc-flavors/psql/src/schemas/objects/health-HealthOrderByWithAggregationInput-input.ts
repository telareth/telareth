import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './sort-order-input-SortOrderInput-input.js';
import { HealthCountOrderByAggregateInputObjectSchema as HealthCountOrderByAggregateInputObjectSchema } from './health-HealthCountOrderByAggregateInput-input.js';
import { HealthAvgOrderByAggregateInputObjectSchema as HealthAvgOrderByAggregateInputObjectSchema } from './health-HealthAvgOrderByAggregateInput-input.js';
import { HealthMaxOrderByAggregateInputObjectSchema as HealthMaxOrderByAggregateInputObjectSchema } from './health-HealthMaxOrderByAggregateInput-input.js';
import { HealthMinOrderByAggregateInputObjectSchema as HealthMinOrderByAggregateInputObjectSchema } from './health-HealthMinOrderByAggregateInput-input.js';
import { HealthSumOrderByAggregateInputObjectSchema as HealthSumOrderByAggregateInputObjectSchema } from './health-HealthSumOrderByAggregateInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  status: SortOrder.optional(),
  lastChecked: SortOrder.optional(),
  metadata: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => HealthCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => HealthAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HealthMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HealthMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => HealthSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HealthOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HealthOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthOrderByWithAggregationInput>;
export const HealthOrderByWithAggregationInputObjectZodSchema = makeSchema();
