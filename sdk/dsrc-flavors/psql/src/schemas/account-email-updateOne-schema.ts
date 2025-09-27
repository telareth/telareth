import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './objects/account-email-include-AccountEmailInclude-input.js';
import { AccountEmailUpdateInputObjectSchema as AccountEmailUpdateInputObjectSchema } from './objects/account-email-AccountEmailUpdateInput-input.js';
import { AccountEmailUncheckedUpdateInputObjectSchema as AccountEmailUncheckedUpdateInputObjectSchema } from './objects/account-email-AccountEmailUncheckedUpdateInput-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './objects/account-email-AccountEmailWhereUniqueInput-input.js';

export const AccountEmailUpdateOneSchema: z.ZodType<Prisma.AccountEmailUpdateArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), data: z.union([AccountEmailUpdateInputObjectSchema, AccountEmailUncheckedUpdateInputObjectSchema]), where: AccountEmailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountEmailUpdateArgs>;

export const AccountEmailUpdateOneSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), data: z.union([AccountEmailUpdateInputObjectSchema, AccountEmailUncheckedUpdateInputObjectSchema]), where: AccountEmailWhereUniqueInputObjectSchema }).strict();