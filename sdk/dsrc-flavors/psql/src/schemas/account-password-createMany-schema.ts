import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordCreateManyInputObjectSchema as AccountPasswordCreateManyInputObjectSchema } from './objects/account-password-AccountPasswordCreateManyInput-input.js';

export const AccountPasswordCreateManySchema: z.ZodType<Prisma.AccountPasswordCreateManyArgs> = z.object({ data: z.union([ AccountPasswordCreateManyInputObjectSchema, z.array(AccountPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordCreateManyArgs>;

export const AccountPasswordCreateManySchemaZodSchema = z.object({ data: z.union([ AccountPasswordCreateManyInputObjectSchema, z.array(AccountPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();