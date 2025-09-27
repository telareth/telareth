import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { QueryMode as QueryModeSchema } from '../enums/query-mode-enum.js';
import { NestedUuidNullableWithAggregatesFilterObjectSchema as NestedUuidNullableWithAggregatesFilterObjectSchema } from './nested-uuid-nullable-with-aggregates-filter-NestedUuidNullableWithAggregatesFilter-input.js';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './nested-int-nullable-filter-NestedIntNullableFilter-input.js';
import { NestedStringNullableFilterObjectSchema as NestedStringNullableFilterObjectSchema } from './nested-string-nullable-filter-NestedStringNullableFilter-input.js'

const makeSchema = () => z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: QueryMode.optional(),
  not: z.union([z.string(), z.lazy(() => NestedUuidNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const UuidNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.UuidNullableWithAggregatesFilter>;
export const UuidNullableWithAggregatesFilterObjectZodSchema = makeSchema();
