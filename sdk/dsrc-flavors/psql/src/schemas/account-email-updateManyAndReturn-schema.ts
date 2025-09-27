import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailUpdateManyMutationInputObjectSchema as AccountEmailUpdateManyMutationInputObjectSchema } from './objects/account-email-AccountEmailUpdateManyMutationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './objects/account-email-AccountEmailWhereInput-input.js';

export const AccountEmailUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountEmailUpdateManyAndReturnArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), data: AccountEmailUpdateManyMutationInputObjectSchema, where: AccountEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyAndReturnArgs>;

export const AccountEmailUpdateManyAndReturnSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), data: AccountEmailUpdateManyMutationInputObjectSchema, where: AccountEmailWhereInputObjectSchema.optional() }).strict();