import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './objects/account-email-AccountEmailWhereInput-input.js';

export const AccountEmailDeleteManySchema: z.ZodType<Prisma.AccountEmailDeleteManyArgs> = z.object({ where: AccountEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailDeleteManyArgs>;

export const AccountEmailDeleteManySchemaZodSchema = z.object({ where: AccountEmailWhereInputObjectSchema.optional() }).strict();