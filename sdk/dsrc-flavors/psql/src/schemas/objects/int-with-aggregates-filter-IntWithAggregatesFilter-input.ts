import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { NestedIntWithAggregatesFilterObjectSchema as NestedIntWithAggregatesFilterObjectSchema } from './nested-int-with-aggregates-filter-NestedIntWithAggregatesFilter-input.js';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './nested-int-filter-NestedIntFilter-input.js';
import { NestedFloatFilterObjectSchema as NestedFloatFilterObjectSchema } from './nested-float-filter-NestedFloatFilter-input.js'

const makeSchema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntWithAggregatesFilter>;
export const IntWithAggregatesFilterObjectZodSchema = makeSchema();
