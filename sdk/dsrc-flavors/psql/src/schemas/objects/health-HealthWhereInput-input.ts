import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './int-filter-IntFilter-input.js';
import { EnumHealthStatusFilterObjectSchema as EnumHealthStatusFilterObjectSchema } from './enum-health-status-filter-EnumHealthStatusFilter-input.js';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './json-nullable-filter-JsonNullableFilter-input.js'

const healthwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HealthWhereInputObjectSchema), z.lazy(() => HealthWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HealthWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HealthWhereInputObjectSchema), z.lazy(() => HealthWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumHealthStatusFilterObjectSchema), HealthStatus]).optional(),
  lastChecked: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional()
}).strict();
export const HealthWhereInputObjectSchema: z.ZodType<Prisma.HealthWhereInput> = healthwhereinputSchema as unknown as z.ZodType<Prisma.HealthWhereInput>;
export const HealthWhereInputObjectZodSchema = healthwhereinputSchema;
