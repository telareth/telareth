import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './uuid-filter-UuidFilter-input.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { AccountEmailNullableScalarRelationFilterObjectSchema as AccountEmailNullableScalarRelationFilterObjectSchema } from './account-email-nullable-scalar-AccountEmailNullableScalarRelationFilter-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js'

const accountemailverificationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountEmailVerificationWhereInputObjectSchema), z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountEmailVerificationWhereInputObjectSchema), z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  email: z.union([z.lazy(() => AccountEmailNullableScalarRelationFilterObjectSchema), z.lazy(() => AccountEmailWhereInputObjectSchema)]).optional()
}).strict();
export const AccountEmailVerificationWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationWhereInput> = accountemailverificationwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailVerificationWhereInput>;
export const AccountEmailVerificationWhereInputObjectZodSchema = accountemailverificationwhereinputSchema;
