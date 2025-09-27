import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { NullsOrder as NullsOrderSchema } from '../enums/nulls-order-enum.js'

const makeSchema = () => z.object({
  sort: SortOrder,
  nulls: NullsOrder.optional()
}).strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectZodSchema = makeSchema();
