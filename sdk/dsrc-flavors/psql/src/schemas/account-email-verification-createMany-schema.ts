import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationCreateManyInputObjectSchema as AccountEmailVerificationCreateManyInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationCreateManyInput-input.js';

export const AccountEmailVerificationCreateManySchema: z.ZodType<Prisma.AccountEmailVerificationCreateManyArgs> = z.object({ data: z.union([ AccountEmailVerificationCreateManyInputObjectSchema, z.array(AccountEmailVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateManyArgs>;

export const AccountEmailVerificationCreateManySchemaZodSchema = z.object({ data: z.union([ AccountEmailVerificationCreateManyInputObjectSchema, z.array(AccountEmailVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();