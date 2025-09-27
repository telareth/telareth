import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './uuid-filter-UuidFilter-input.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './string-filter-StringFilter-input.js';
import { AccountNullableScalarRelationFilterObjectSchema as AccountNullableScalarRelationFilterObjectSchema } from './account-nullable-scalar-AccountNullableScalarRelationFilter-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js'

const accountpasswordwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountPasswordWhereInputObjectSchema), z.lazy(() => AccountPasswordWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountPasswordWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountPasswordWhereInputObjectSchema), z.lazy(() => AccountPasswordWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  account: z.union([z.lazy(() => AccountNullableScalarRelationFilterObjectSchema), z.lazy(() => AccountWhereInputObjectSchema)]).optional()
}).strict();
export const AccountPasswordWhereInputObjectSchema: z.ZodType<Prisma.AccountPasswordWhereInput> = accountpasswordwhereinputSchema as unknown as z.ZodType<Prisma.AccountPasswordWhereInput>;
export const AccountPasswordWhereInputObjectZodSchema = accountpasswordwhereinputSchema;
