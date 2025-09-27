import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { QueryMode as QueryModeSchema } from '../enums/query-mode-enum.js';
import { NestedUuidFilterObjectSchema as NestedUuidFilterObjectSchema } from './nested-uuid-filter-NestedUuidFilter-input.js'

const makeSchema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: QueryMode.optional(),
  not: z.union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)]).optional()
}).strict();
export const UuidFilterObjectSchema: z.ZodType<Prisma.UuidFilter> = makeSchema() as unknown as z.ZodType<Prisma.UuidFilter>;
export const UuidFilterObjectZodSchema = makeSchema();
