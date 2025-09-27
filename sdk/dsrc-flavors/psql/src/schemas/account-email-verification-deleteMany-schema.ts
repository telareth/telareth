import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereInput-input.js';

export const AccountEmailVerificationDeleteManySchema: z.ZodType<Prisma.AccountEmailVerificationDeleteManyArgs> = z.object({ where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationDeleteManyArgs>;

export const AccountEmailVerificationDeleteManySchemaZodSchema = z.object({ where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict();