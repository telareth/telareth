import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordUpdateManyMutationInputObjectSchema as AccountPasswordUpdateManyMutationInputObjectSchema } from './objects/account-password-AccountPasswordUpdateManyMutationInput-input.js';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './objects/account-password-AccountPasswordWhereInput-input.js';

export const AccountPasswordUpdateManySchema: z.ZodType<Prisma.AccountPasswordUpdateManyArgs> = z.object({ data: AccountPasswordUpdateManyMutationInputObjectSchema, where: AccountPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordUpdateManyArgs>;

export const AccountPasswordUpdateManySchemaZodSchema = z.object({ data: AccountPasswordUpdateManyMutationInputObjectSchema, where: AccountPasswordWhereInputObjectSchema.optional() }).strict();