import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  password: SortOrder.optional()
}).strict();
export const AccountPasswordMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordMaxOrderByAggregateInput>;
export const AccountPasswordMaxOrderByAggregateInputObjectZodSchema = makeSchema();
