import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationSelectObjectSchema as AccountEmailVerificationSelectObjectSchema } from './objects/account-email-verification-select-AccountEmailVerificationSelect-input.js';
import { AccountEmailVerificationUpdateManyMutationInputObjectSchema as AccountEmailVerificationUpdateManyMutationInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationUpdateManyMutationInput-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereInput-input.js';

export const AccountEmailVerificationUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateManyAndReturnArgs> = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), data: AccountEmailVerificationUpdateManyMutationInputObjectSchema, where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateManyAndReturnArgs>;

export const AccountEmailVerificationUpdateManyAndReturnSchemaZodSchema = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), data: AccountEmailVerificationUpdateManyMutationInputObjectSchema, where: AccountEmailVerificationWhereInputObjectSchema.optional() }).strict();