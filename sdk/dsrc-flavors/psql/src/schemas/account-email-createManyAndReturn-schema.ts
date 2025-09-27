import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './objects/account-email-select-AccountEmailSelect-input.js';
import { AccountEmailCreateManyInputObjectSchema as AccountEmailCreateManyInputObjectSchema } from './objects/account-email-AccountEmailCreateManyInput-input.js';

export const AccountEmailCreateManyAndReturnSchema: z.ZodType<Prisma.AccountEmailCreateManyAndReturnArgs> = z.object({ select: AccountEmailSelectObjectSchema.optional(), data: z.union([ AccountEmailCreateManyInputObjectSchema, z.array(AccountEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailCreateManyAndReturnArgs>;

export const AccountEmailCreateManyAndReturnSchemaZodSchema = z.object({ select: AccountEmailSelectObjectSchema.optional(), data: z.union([ AccountEmailCreateManyInputObjectSchema, z.array(AccountEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();