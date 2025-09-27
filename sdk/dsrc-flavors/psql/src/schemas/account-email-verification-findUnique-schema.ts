import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationSelectObjectSchema as AccountEmailVerificationSelectObjectSchema } from './objects/account-email-verification-select-AccountEmailVerificationSelect-input.js';
import { AccountEmailVerificationIncludeObjectSchema as AccountEmailVerificationIncludeObjectSchema } from './objects/account-email-verification-include-AccountEmailVerificationInclude-input.js';
import { AccountEmailVerificationWhereUniqueInputObjectSchema as AccountEmailVerificationWhereUniqueInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereUniqueInput-input.js';

export const AccountEmailVerificationFindUniqueSchema: z.ZodType<Prisma.AccountEmailVerificationFindUniqueArgs> = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), include: AccountEmailVerificationIncludeObjectSchema.optional(), where: AccountEmailVerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindUniqueArgs>;

export const AccountEmailVerificationFindUniqueSchemaZodSchema = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), include: AccountEmailVerificationIncludeObjectSchema.optional(), where: AccountEmailVerificationWhereUniqueInputObjectSchema }).strict();