import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional()
}).strict();
export const AccountEmailVerificationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCountOrderByAggregateInput>;
export const AccountEmailVerificationCountOrderByAggregateInputObjectZodSchema = makeSchema();
