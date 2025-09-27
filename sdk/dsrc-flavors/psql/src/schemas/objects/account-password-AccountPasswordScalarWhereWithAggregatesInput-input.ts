import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './uuid-with-aggregates-filter-UuidWithAggregatesFilter-input.js';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './date-time-with-aggregates-filter-DateTimeWithAggregatesFilter-input.js';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './string-with-aggregates-filter-StringWithAggregatesFilter-input.js'

const accountpasswordscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const AccountPasswordScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountPasswordScalarWhereWithAggregatesInput> = accountpasswordscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountPasswordScalarWhereWithAggregatesInput>;
export const AccountPasswordScalarWhereWithAggregatesInputObjectZodSchema = accountpasswordscalarwherewithaggregatesinputSchema;
