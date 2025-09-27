import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './uuid-filter-UuidFilter-input.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './string-filter-StringFilter-input.js';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './bool-filter-BoolFilter-input.js';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './uuid-nullable-filter-UuidNullableFilter-input.js';
import { AccountNullableScalarRelationFilterObjectSchema as AccountNullableScalarRelationFilterObjectSchema } from './account-nullable-scalar-AccountNullableScalarRelationFilter-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js';
import { AccountEmailVerificationNullableScalarRelationFilterObjectSchema as AccountEmailVerificationNullableScalarRelationFilterObjectSchema } from './account-email-verification-nullable-scalar-AccountEmailVerificationNullableScalarRelationFilter-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereInput-input.js'

const accountemailwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountEmailWhereInputObjectSchema), z.lazy(() => AccountEmailWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountEmailWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountEmailWhereInputObjectSchema), z.lazy(() => AccountEmailWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  accountId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verificationId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  account: z.union([z.lazy(() => AccountNullableScalarRelationFilterObjectSchema), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  verification: z.union([z.lazy(() => AccountEmailVerificationNullableScalarRelationFilterObjectSchema), z.lazy(() => AccountEmailVerificationWhereInputObjectSchema)]).optional()
}).strict();
export const AccountEmailWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailWhereInput> = accountemailwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailWhereInput>;
export const AccountEmailWhereInputObjectZodSchema = accountemailwhereinputSchema;
