import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './uuid-filter-UuidFilter-input.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './string-filter-StringFilter-input.js';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './bool-filter-BoolFilter-input.js';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './uuid-nullable-filter-UuidNullableFilter-input.js'

const accountemailscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountEmailScalarWhereInputObjectSchema), z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountEmailScalarWhereInputObjectSchema), z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  accountId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verificationId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AccountEmailScalarWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailScalarWhereInput> = accountemailscalarwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailScalarWhereInput>;
export const AccountEmailScalarWhereInputObjectZodSchema = accountemailscalarwhereinputSchema;
