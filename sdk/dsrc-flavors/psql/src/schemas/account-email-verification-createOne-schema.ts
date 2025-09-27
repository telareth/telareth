import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationSelectObjectSchema as AccountEmailVerificationSelectObjectSchema } from './objects/account-email-verification-select-AccountEmailVerificationSelect-input.js';
import { AccountEmailVerificationIncludeObjectSchema as AccountEmailVerificationIncludeObjectSchema } from './objects/account-email-verification-include-AccountEmailVerificationInclude-input.js';
import { AccountEmailVerificationCreateInputObjectSchema as AccountEmailVerificationCreateInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationCreateInput-input.js';
import { AccountEmailVerificationUncheckedCreateInputObjectSchema as AccountEmailVerificationUncheckedCreateInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationUncheckedCreateInput-input.js';

export const AccountEmailVerificationCreateOneSchema: z.ZodType<Prisma.AccountEmailVerificationCreateArgs> = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), include: AccountEmailVerificationIncludeObjectSchema.optional(), data: z.union([AccountEmailVerificationCreateInputObjectSchema, AccountEmailVerificationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateArgs>;

export const AccountEmailVerificationCreateOneSchemaZodSchema = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), include: AccountEmailVerificationIncludeObjectSchema.optional(), data: z.union([AccountEmailVerificationCreateInputObjectSchema, AccountEmailVerificationUncheckedCreateInputObjectSchema]) }).strict();