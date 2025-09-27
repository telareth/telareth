import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './objects/account-password-include-AccountPasswordInclude-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './objects/account-password-AccountPasswordWhereUniqueInput-input.js';
import { AccountPasswordCreateInputObjectSchema as AccountPasswordCreateInputObjectSchema } from './objects/account-password-AccountPasswordCreateInput-input.js';
import { AccountPasswordUncheckedCreateInputObjectSchema as AccountPasswordUncheckedCreateInputObjectSchema } from './objects/account-password-AccountPasswordUncheckedCreateInput-input.js';
import { AccountPasswordUpdateInputObjectSchema as AccountPasswordUpdateInputObjectSchema } from './objects/account-password-AccountPasswordUpdateInput-input.js';
import { AccountPasswordUncheckedUpdateInputObjectSchema as AccountPasswordUncheckedUpdateInputObjectSchema } from './objects/account-password-AccountPasswordUncheckedUpdateInput-input.js';

export const AccountPasswordUpsertOneSchema: z.ZodType<Prisma.AccountPasswordUpsertArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), where: AccountPasswordWhereUniqueInputObjectSchema, create: z.union([ AccountPasswordCreateInputObjectSchema, AccountPasswordUncheckedCreateInputObjectSchema ]), update: z.union([ AccountPasswordUpdateInputObjectSchema, AccountPasswordUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountPasswordUpsertArgs>;

export const AccountPasswordUpsertOneSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), where: AccountPasswordWhereUniqueInputObjectSchema, create: z.union([ AccountPasswordCreateInputObjectSchema, AccountPasswordUncheckedCreateInputObjectSchema ]), update: z.union([ AccountPasswordUpdateInputObjectSchema, AccountPasswordUncheckedUpdateInputObjectSchema ]) }).strict();