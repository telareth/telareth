import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './uuid-filter-UuidFilter-input.js';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './date-time-filter-DateTimeFilter-input.js';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './bool-filter-BoolFilter-input.js';
import { AccountEmailListRelationFilterObjectSchema as AccountEmailListRelationFilterObjectSchema } from './account-email-AccountEmailListRelationFilter-input.js';
import { AccountPasswordScalarRelationFilterObjectSchema as AccountPasswordScalarRelationFilterObjectSchema } from './account-password-scalar-AccountPasswordScalarRelationFilter-input.js';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './account-password-AccountPasswordWhereInput-input.js'

const accountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v))]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  passwordId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  emails: z.lazy(() => AccountEmailListRelationFilterObjectSchema).optional(),
  password: z.union([z.lazy(() => AccountPasswordScalarRelationFilterObjectSchema), z.lazy(() => AccountPasswordWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;
