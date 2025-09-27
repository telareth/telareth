import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './objects/account-password-include-AccountPasswordInclude-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './objects/account-password-AccountPasswordWhereUniqueInput-input.js';

export const AccountPasswordFindUniqueSchema: z.ZodType<Prisma.AccountPasswordFindUniqueArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), where: AccountPasswordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountPasswordFindUniqueArgs>;

export const AccountPasswordFindUniqueSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), where: AccountPasswordWhereUniqueInputObjectSchema }).strict();