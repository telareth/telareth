import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/account-select-AccountSelect-input.js';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/account-include-AccountInclude-input.js';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/account-AccountUpdateInput-input.js';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/account-AccountUncheckedUpdateInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/account-AccountWhereUniqueInput-input.js';

export const AccountUpdateOneSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountUpdateArgs>;

export const AccountUpdateOneSchemaZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();