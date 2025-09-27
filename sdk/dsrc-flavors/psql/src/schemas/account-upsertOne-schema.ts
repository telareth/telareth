import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/account-select-AccountSelect-input.js';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/account-include-AccountInclude-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/account-AccountWhereUniqueInput-input.js';
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from './objects/account-AccountCreateInput-input.js';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/account-AccountUncheckedCreateInput-input.js';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/account-AccountUpdateInput-input.js';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/account-AccountUncheckedUpdateInput-input.js';

export const AccountUpsertOneSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountUpsertArgs>;

export const AccountUpsertOneSchemaZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict();