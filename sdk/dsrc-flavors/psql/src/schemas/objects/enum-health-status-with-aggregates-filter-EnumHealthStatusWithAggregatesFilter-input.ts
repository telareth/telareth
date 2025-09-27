import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { NestedEnumHealthStatusWithAggregatesFilterObjectSchema as NestedEnumHealthStatusWithAggregatesFilterObjectSchema } from './nested-enum-health-status-with-aggregates-filter-NestedEnumHealthStatusWithAggregatesFilter-input.js';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './nested-int-filter-NestedIntFilter-input.js';
import { NestedEnumHealthStatusFilterObjectSchema as NestedEnumHealthStatusFilterObjectSchema } from './nested-enum-health-status-filter-NestedEnumHealthStatusFilter-input.js'

const makeSchema = () => z.object({
  equals: HealthStatus.optional(),
  in: HealthStatus.array().optional(),
  notIn: HealthStatus.array().optional(),
  not: z.union([HealthStatus, z.lazy(() => NestedEnumHealthStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional()
}).strict();
export const EnumHealthStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumHealthStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumHealthStatusWithAggregatesFilter>;
export const EnumHealthStatusWithAggregatesFilterObjectZodSchema = makeSchema();
