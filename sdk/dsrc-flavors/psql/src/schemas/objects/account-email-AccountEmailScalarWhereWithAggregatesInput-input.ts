import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './uuid-with-aggregates-filter-UuidWithAggregatesFilter-input.js';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './date-time-with-aggregates-filter-DateTimeWithAggregatesFilter-input.js';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './string-with-aggregates-filter-StringWithAggregatesFilter-input.js';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './bool-with-aggregates-filter-BoolWithAggregatesFilter-input.js';
import { UuidNullableWithAggregatesFilterObjectSchema as UuidNullableWithAggregatesFilterObjectSchema } from './uuid-nullable-with-aggregates-filter-UuidNullableWithAggregatesFilter-input.js'

const accountemailscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  accountId: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  verificationId: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AccountEmailScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountEmailScalarWhereWithAggregatesInput> = accountemailscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountEmailScalarWhereWithAggregatesInput>;
export const AccountEmailScalarWhereWithAggregatesInputObjectZodSchema = accountemailscalarwherewithaggregatesinputSchema;
