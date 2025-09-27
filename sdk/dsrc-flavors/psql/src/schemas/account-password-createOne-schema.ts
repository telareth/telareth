import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './objects/account-password-include-AccountPasswordInclude-input.js';
import { AccountPasswordCreateInputObjectSchema as AccountPasswordCreateInputObjectSchema } from './objects/account-password-AccountPasswordCreateInput-input.js';
import { AccountPasswordUncheckedCreateInputObjectSchema as AccountPasswordUncheckedCreateInputObjectSchema } from './objects/account-password-AccountPasswordUncheckedCreateInput-input.js';

export const AccountPasswordCreateOneSchema: z.ZodType<Prisma.AccountPasswordCreateArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), data: z.union([AccountPasswordCreateInputObjectSchema, AccountPasswordUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountPasswordCreateArgs>;

export const AccountPasswordCreateOneSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), include: AccountPasswordIncludeObjectSchema.optional(), data: z.union([AccountPasswordCreateInputObjectSchema, AccountPasswordUncheckedCreateInputObjectSchema]) }).strict();