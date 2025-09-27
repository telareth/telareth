import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { NestedBoolWithAggregatesFilterObjectSchema as NestedBoolWithAggregatesFilterObjectSchema } from './nested-bool-with-aggregates-filter-NestedBoolWithAggregatesFilter-input.js';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './nested-int-filter-NestedIntFilter-input.js';
import { NestedBoolFilterObjectSchema as NestedBoolFilterObjectSchema } from './nested-bool-filter-NestedBoolFilter-input.js'

const makeSchema = () => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict();
export const BoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoolWithAggregatesFilter>;
export const BoolWithAggregatesFilterObjectZodSchema = makeSchema();
