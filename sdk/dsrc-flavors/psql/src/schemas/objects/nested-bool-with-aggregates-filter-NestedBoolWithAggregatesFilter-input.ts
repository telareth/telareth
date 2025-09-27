import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './nested-int-filter-NestedIntFilter-input.js';
import { NestedBoolFilterObjectSchema as NestedBoolFilterObjectSchema } from './nested-bool-filter-NestedBoolFilter-input.js'

const nestedboolwithaggregatesfilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict();
export const NestedBoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = nestedboolwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedBoolWithAggregatesFilter>;
export const NestedBoolWithAggregatesFilterObjectZodSchema = nestedboolwithaggregatesfilterSchema;
