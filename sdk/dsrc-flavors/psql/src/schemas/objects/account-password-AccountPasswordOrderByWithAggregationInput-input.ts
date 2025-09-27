import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { AccountPasswordCountOrderByAggregateInputObjectSchema as AccountPasswordCountOrderByAggregateInputObjectSchema } from './account-password-AccountPasswordCountOrderByAggregateInput-input.js';
import { AccountPasswordMaxOrderByAggregateInputObjectSchema as AccountPasswordMaxOrderByAggregateInputObjectSchema } from './account-password-AccountPasswordMaxOrderByAggregateInput-input.js';
import { AccountPasswordMinOrderByAggregateInputObjectSchema as AccountPasswordMinOrderByAggregateInputObjectSchema } from './account-password-AccountPasswordMinOrderByAggregateInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  password: SortOrder.optional(),
  _count: z.lazy(() => AccountPasswordCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountPasswordMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountPasswordMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountPasswordOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountPasswordOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordOrderByWithAggregationInput>;
export const AccountPasswordOrderByWithAggregationInputObjectZodSchema = makeSchema();
