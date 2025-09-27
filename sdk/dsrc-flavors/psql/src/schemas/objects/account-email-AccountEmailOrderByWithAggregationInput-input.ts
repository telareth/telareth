import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './sort-order-input-SortOrderInput-input.js';
import { AccountEmailCountOrderByAggregateInputObjectSchema as AccountEmailCountOrderByAggregateInputObjectSchema } from './account-email-AccountEmailCountOrderByAggregateInput-input.js';
import { AccountEmailMaxOrderByAggregateInputObjectSchema as AccountEmailMaxOrderByAggregateInputObjectSchema } from './account-email-AccountEmailMaxOrderByAggregateInput-input.js';
import { AccountEmailMinOrderByAggregateInputObjectSchema as AccountEmailMinOrderByAggregateInputObjectSchema } from './account-email-AccountEmailMinOrderByAggregateInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  email: SortOrder.optional(),
  isPrimary: SortOrder.optional(),
  accountId: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verificationId: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AccountEmailCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountEmailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountEmailMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountEmailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailOrderByWithAggregationInput>;
export const AccountEmailOrderByWithAggregationInputObjectZodSchema = makeSchema();
