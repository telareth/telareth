import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional()
}).strict();
export const AccountEmailVerificationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMaxOrderByAggregateInput>;
export const AccountEmailVerificationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
