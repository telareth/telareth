import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereInput-input.js'

const makeSchema = () => z.object({
  is: z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).optional().nullable()
}).strict();
export const AccountEmailVerificationNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailVerificationNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationNullableScalarRelationFilter>;
export const AccountEmailVerificationNullableScalarRelationFilterObjectZodSchema = makeSchema();
