import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/account-AccountWhereInput-input.js';

export const AccountDeleteManySchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeleteManyArgs>;

export const AccountDeleteManySchemaZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict();