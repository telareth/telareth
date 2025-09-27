import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional()
}).strict();
export const AccountEmailVerificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMinOrderByAggregateInput>;
export const AccountEmailVerificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
