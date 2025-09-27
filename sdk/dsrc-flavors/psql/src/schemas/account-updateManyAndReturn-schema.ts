import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/account-select-AccountSelect-input.js';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from './objects/account-AccountUpdateManyMutationInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/account-AccountWhereInput-input.js';

export const AccountUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountUpdateManyAndReturnArgs>;

export const AccountUpdateManyAndReturnSchemaZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();