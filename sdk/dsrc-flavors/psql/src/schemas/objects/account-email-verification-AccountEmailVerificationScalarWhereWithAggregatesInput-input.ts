import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './uuid-with-aggregates-filter-UuidWithAggregatesFilter-input.js';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './date-time-with-aggregates-filter-DateTimeWithAggregatesFilter-input.js'

const accountemailverificationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional()
}).strict();
export const AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationScalarWhereWithAggregatesInput> = accountemailverificationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountEmailVerificationScalarWhereWithAggregatesInput>;
export const AccountEmailVerificationScalarWhereWithAggregatesInputObjectZodSchema = accountemailverificationscalarwherewithaggregatesinputSchema;
