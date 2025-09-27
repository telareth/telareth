import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js'

const makeSchema = () => z.object({
  is: z.lazy(() => AccountEmailWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AccountEmailWhereInputObjectSchema).optional().nullable()
}).strict();
export const AccountEmailNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailNullableScalarRelationFilter>;
export const AccountEmailNullableScalarRelationFilterObjectZodSchema = makeSchema();
