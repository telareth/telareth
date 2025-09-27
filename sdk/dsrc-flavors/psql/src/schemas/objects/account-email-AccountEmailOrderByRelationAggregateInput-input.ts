import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js'

const makeSchema = () => z.object({
  _count: SortOrder.optional()
}).strict();
export const AccountEmailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailOrderByRelationAggregateInput>;
export const AccountEmailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
