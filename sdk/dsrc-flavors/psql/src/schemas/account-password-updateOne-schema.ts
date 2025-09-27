import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './objects/account-password-include-AccountPasswordInclude-input.js';
import { AccountPasswordUpdateInputObjectSchema as AccountPasswordUpdateInputObjectSchema } from './objects/account-password-AccountPasswordUpdateInput-input.js';
import { AccountPasswordUncheckedUpdateInputObjectSchema as AccountPasswordUncheckedUpdateInputObjectSchema } from './objects/account-password-AccountPasswordUncheckedUpdateInput-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './objects/account-password-AccountPasswordWhereUniqueInput-input.js';

export const AccountPasswordUpdateOneSchema: z.ZodType<Prisma.AccountPasswordUpdateArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), data: z.union([AccountPasswordUpdateInputObjectSchema, AccountPasswordUncheckedUpdateInputObjectSchema]), where: AccountPasswordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountPasswordUpdateArgs>;

export const AccountPasswordUpdateOneSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), data: z.union([AccountPasswordUpdateInputObjectSchema, AccountPasswordUncheckedUpdateInputObjectSchema]), where: AccountPasswordWhereUniqueInputObjectSchema }).strict();