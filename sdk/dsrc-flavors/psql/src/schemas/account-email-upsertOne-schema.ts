import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './objects/account-email-include-AccountEmailInclude-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './objects/account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailCreateInputObjectSchema as AccountEmailCreateInputObjectSchema } from './objects/account-email-AccountEmailCreateInput-input.js';
import { AccountEmailUncheckedCreateInputObjectSchema as AccountEmailUncheckedCreateInputObjectSchema } from './objects/account-email-AccountEmailUncheckedCreateInput-input.js';
import { AccountEmailUpdateInputObjectSchema as AccountEmailUpdateInputObjectSchema } from './objects/account-email-AccountEmailUpdateInput-input.js';
import { AccountEmailUncheckedUpdateInputObjectSchema as AccountEmailUncheckedUpdateInputObjectSchema } from './objects/account-email-AccountEmailUncheckedUpdateInput-input.js';

export const AccountEmailUpsertOneSchema: z.ZodType<Prisma.AccountEmailUpsertArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), where: AccountEmailWhereUniqueInputObjectSchema, create: z.union([ AccountEmailCreateInputObjectSchema, AccountEmailUncheckedCreateInputObjectSchema ]), update: z.union([ AccountEmailUpdateInputObjectSchema, AccountEmailUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountEmailUpsertArgs>;

export const AccountEmailUpsertOneSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), where: AccountEmailWhereUniqueInputObjectSchema, create: z.union([ AccountEmailCreateInputObjectSchema, AccountEmailUncheckedCreateInputObjectSchema ]), update: z.union([ AccountEmailUpdateInputObjectSchema, AccountEmailUncheckedUpdateInputObjectSchema ]) }).strict();