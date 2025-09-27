import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { QueryMode as QueryModeSchema } from '../enums/query-mode-enum.js';
import { NestedUuidWithAggregatesFilterObjectSchema as NestedUuidWithAggregatesFilterObjectSchema } from './nested-uuid-with-aggregates-filter-NestedUuidWithAggregatesFilter-input.js';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './nested-int-filter-NestedIntFilter-input.js';
import { NestedStringFilterObjectSchema as NestedStringFilterObjectSchema } from './nested-string-filter-NestedStringFilter-input.js'

const makeSchema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: QueryMode.optional(),
  not: z.union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const UuidWithAggregatesFilterObjectSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.UuidWithAggregatesFilter>;
export const UuidWithAggregatesFilterObjectZodSchema = makeSchema();
