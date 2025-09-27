import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { NestedEnumHealthStatusFilterObjectSchema as NestedEnumHealthStatusFilterObjectSchema } from './nested-enum-health-status-filter-NestedEnumHealthStatusFilter-input.js'

const makeSchema = () => z.object({
  equals: HealthStatus.optional(),
  in: HealthStatus.array().optional(),
  notIn: HealthStatus.array().optional(),
  not: z.union([HealthStatus, z.lazy(() => NestedEnumHealthStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumHealthStatusFilterObjectSchema: z.ZodType<Prisma.EnumHealthStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumHealthStatusFilter>;
export const EnumHealthStatusFilterObjectZodSchema = makeSchema();
