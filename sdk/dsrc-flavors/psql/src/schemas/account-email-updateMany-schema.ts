import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailUpdateManyMutationInputObjectSchema as AccountEmailUpdateManyMutationInputObjectSchema } from './objects/account-email-AccountEmailUpdateManyMutationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './objects/account-email-AccountEmailWhereInput-input.js';

export const AccountEmailUpdateManySchema: z.ZodType<Prisma.AccountEmailUpdateManyArgs> = z.object({ data: AccountEmailUpdateManyMutationInputObjectSchema, where: AccountEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyArgs>;

export const AccountEmailUpdateManySchemaZodSchema = z.object({ data: AccountEmailUpdateManyMutationInputObjectSchema, where: AccountEmailWhereInputObjectSchema.optional() }).strict();