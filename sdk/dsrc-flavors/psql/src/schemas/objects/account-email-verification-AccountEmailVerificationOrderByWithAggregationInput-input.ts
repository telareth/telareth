import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { AccountEmailVerificationCountOrderByAggregateInputObjectSchema as AccountEmailVerificationCountOrderByAggregateInputObjectSchema } from './account-email-verification-AccountEmailVerificationCountOrderByAggregateInput-input.js';
import { AccountEmailVerificationMaxOrderByAggregateInputObjectSchema as AccountEmailVerificationMaxOrderByAggregateInputObjectSchema } from './account-email-verification-AccountEmailVerificationMaxOrderByAggregateInput-input.js';
import { AccountEmailVerificationMinOrderByAggregateInputObjectSchema as AccountEmailVerificationMinOrderByAggregateInputObjectSchema } from './account-email-verification-AccountEmailVerificationMinOrderByAggregateInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  _count: z.lazy(() => AccountEmailVerificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountEmailVerificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountEmailVerificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationOrderByWithAggregationInput>;
export const AccountEmailVerificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
