import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationSelectObjectSchema as AccountEmailVerificationSelectObjectSchema } from './objects/account-email-verification-select-AccountEmailVerificationSelect-input.js';
import { AccountEmailVerificationCreateManyInputObjectSchema as AccountEmailVerificationCreateManyInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationCreateManyInput-input.js';

export const AccountEmailVerificationCreateManyAndReturnSchema: z.ZodType<Prisma.AccountEmailVerificationCreateManyAndReturnArgs> = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), data: z.union([ AccountEmailVerificationCreateManyInputObjectSchema, z.array(AccountEmailVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateManyAndReturnArgs>;

export const AccountEmailVerificationCreateManyAndReturnSchemaZodSchema = z.object({ select: AccountEmailVerificationSelectObjectSchema.optional(), data: z.union([ AccountEmailVerificationCreateManyInputObjectSchema, z.array(AccountEmailVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();