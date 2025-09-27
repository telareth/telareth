import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './objects/account-password-AccountPasswordWhereInput-input.js';

export const AccountPasswordDeleteManySchema: z.ZodType<Prisma.AccountPasswordDeleteManyArgs> = z.object({ where: AccountPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordDeleteManyArgs>;

export const AccountPasswordDeleteManySchemaZodSchema = z.object({ where: AccountPasswordWhereInputObjectSchema.optional() }).strict();