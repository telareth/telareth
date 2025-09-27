import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationUpdateManyMutationInputObjectSchema as AccountEmailVerificationUpdateManyMutationInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationUpdateManyMutationInput-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereInput-input.js';

export const AccountEmailVerificationUpdateManySchema: z.ZodType<Prisma.AccountEmailVerificationUpdateManyArgs> = z.object({ data: AccountEmailVerificationUpdateManyMutationInputObjectSchema, where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateManyArgs>;

export const AccountEmailVerificationUpdateManySchemaZodSchema = z.object({ data: AccountEmailVerificationUpdateManyMutationInputObjectSchema, where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict();