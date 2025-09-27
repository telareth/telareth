import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './int-with-aggregates-filter-IntWithAggregatesFilter-input.js';
import { EnumHealthStatusWithAggregatesFilterObjectSchema as EnumHealthStatusWithAggregatesFilterObjectSchema } from './enum-health-status-with-aggregates-filter-EnumHealthStatusWithAggregatesFilter-input.js';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './date-time-with-aggregates-filter-DateTimeWithAggregatesFilter-input.js';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './json-nullable-with-aggregates-filter-JsonNullableWithAggregatesFilter-input.js'

const healthscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumHealthStatusWithAggregatesFilterObjectSchema), HealthStatus]).optional(),
  lastChecked: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
export const HealthScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HealthScalarWhereWithAggregatesInput> = healthscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HealthScalarWhereWithAggregatesInput>;
export const HealthScalarWhereWithAggregatesInputObjectZodSchema = healthscalarwherewithaggregatesinputSchema;
