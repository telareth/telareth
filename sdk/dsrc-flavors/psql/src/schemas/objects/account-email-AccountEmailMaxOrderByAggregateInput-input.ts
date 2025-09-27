import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  email: SortOrder.optional(),
  isPrimary: SortOrder.optional(),
  accountId: SortOrder.optional(),
  verificationId: SortOrder.optional()
}).strict();
export const AccountEmailMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailMaxOrderByAggregateInput>;
export const AccountEmailMaxOrderByAggregateInputObjectZodSchema = makeSchema();
