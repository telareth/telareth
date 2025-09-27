import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './objects/account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordCreateManyInputObjectSchema as AccountPasswordCreateManyInputObjectSchema } from './objects/account-password-AccountPasswordCreateManyInput-input.js';

export const AccountPasswordCreateManyAndReturnSchema: z.ZodType<Prisma.AccountPasswordCreateManyAndReturnArgs> = z.object({ select: AccountPasswordSelectObjectSchema.optional(), data: z.union([ AccountPasswordCreateManyInputObjectSchema, z.array(AccountPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordCreateManyAndReturnArgs>;

export const AccountPasswordCreateManyAndReturnSchemaZodSchema = z.object({ select: AccountPasswordSelectObjectSchema.optional(), data: z.union([ AccountPasswordCreateManyInputObjectSchema, z.array(AccountPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();