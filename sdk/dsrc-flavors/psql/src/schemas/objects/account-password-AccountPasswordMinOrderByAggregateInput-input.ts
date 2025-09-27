import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  password: SortOrder.optional()
}).strict();
export const AccountPasswordMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordMinOrderByAggregateInput>;
export const AccountPasswordMinOrderByAggregateInputObjectZodSchema = makeSchema();
