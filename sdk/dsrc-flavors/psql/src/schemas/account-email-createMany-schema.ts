import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailCreateManyInputObjectSchema as AccountEmailCreateManyInputObjectSchema } from './objects/account-email-AccountEmailCreateManyInput-input.js';

export const AccountEmailCreateManySchema: z.ZodType<Prisma.AccountEmailCreateManyArgs> = z.object({ data: z.union([ AccountEmailCreateManyInputObjectSchema, z.array(AccountEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailCreateManyArgs>;

export const AccountEmailCreateManySchemaZodSchema = z.object({ data: z.union([ AccountEmailCreateManyInputObjectSchema, z.array(AccountEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();