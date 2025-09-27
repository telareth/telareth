import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './objects/account-email-include-AccountEmailInclude-input.js';
import { AccountEmailCreateInputObjectSchema as AccountEmailCreateInputObjectSchema } from './objects/account-email-AccountEmailCreateInput-input.js';
import { AccountEmailUncheckedCreateInputObjectSchema as AccountEmailUncheckedCreateInputObjectSchema } from './objects/account-email-AccountEmailUncheckedCreateInput-input.js';

export const AccountEmailCreateOneSchema: z.ZodType<Prisma.AccountEmailCreateArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), data: z.union([AccountEmailCreateInputObjectSchema, AccountEmailUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountEmailCreateArgs>;

export const AccountEmailCreateOneSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), data: z.union([AccountEmailCreateInputObjectSchema, AccountEmailUncheckedCreateInputObjectSchema]) }).strict();