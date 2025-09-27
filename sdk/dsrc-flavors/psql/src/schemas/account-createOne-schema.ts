import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/account-select-AccountSelect-input.js';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/account-include-AccountInclude-input.js';
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from './objects/account-AccountCreateInput-input.js';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/account-AccountUncheckedCreateInput-input.js';

export const AccountCreateOneSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountCreateArgs>;

export const AccountCreateOneSchemaZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict();