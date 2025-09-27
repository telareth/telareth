import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordUpdateManyMutationInputObjectSchema as AccountPasswordUpdateManyMutationInputObjectSchema } from './objects/account-password-AccountPasswordUpdateManyMutationInput-input.js';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './objects/account-password-AccountPasswordWhereInput-input.js';

export const AccountPasswordUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountPasswordUpdateManyAndReturnArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), data: AccountPasswordUpdateManyMutationInputObjectSchema, where: AccountPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordUpdateManyAndReturnArgs>;

export const AccountPasswordUpdateManyAndReturnSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), data: AccountPasswordUpdateManyMutationInputObjectSchema, where: AccountPasswordWhereInputObjectSchema.optional() }).strict();