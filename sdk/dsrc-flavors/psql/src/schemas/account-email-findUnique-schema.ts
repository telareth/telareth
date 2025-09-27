import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './objects/account-email-include-AccountEmailInclude-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './objects/account-email-AccountEmailWhereUniqueInput-input.js';

export const AccountEmailFindUniqueSchema: z.ZodType<Prisma.AccountEmailFindUniqueArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), where: AccountEmailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountEmailFindUniqueArgs>;

export const AccountEmailFindUniqueSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), include: AccountEmailIncludeObjectSchema.optional(), where: AccountEmailWhereUniqueInputObjectSchema }).strict();