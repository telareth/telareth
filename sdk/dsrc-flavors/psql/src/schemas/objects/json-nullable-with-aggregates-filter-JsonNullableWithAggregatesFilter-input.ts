import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { QueryMode as QueryModeSchema } from '../enums/query-mode-enum.js';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './nested-int-nullable-filter-NestedIntNullableFilter-input.js';
import { NestedJsonNullableFilterObjectSchema as NestedJsonNullableFilterObjectSchema } from './nested-json-nullable-filter-NestedJsonNullableFilter-input.js'

import { JsonValueSchema as jsonSchema } from '../helpers/json-helpers';

const makeSchema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryMode.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional()
}).strict();
export const JsonNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.JsonNullableWithAggregatesFilter>;
export const JsonNullableWithAggregatesFilterObjectZodSchema = makeSchema();
