import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailVerificationIncludeObjectSchema as AccountEmailVerificationIncludeObjectSchema } from './objects/account-email-verification-include-AccountEmailVerificationInclude-input.js';
import { AccountEmailVerificationOrderByWithRelationInputObjectSchema as AccountEmailVerificationOrderByWithRelationInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationOrderByWithRelationInput-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereInput-input.js';
import { AccountEmailVerificationWhereUniqueInputObjectSchema as AccountEmailVerificationWhereUniqueInputObjectSchema } from './objects/account-email-verification-AccountEmailVerificationWhereUniqueInput-input.js';
import { AccountEmailVerificationScalarFieldEnum } from './enums/account-email-verification-scalar-field-enum-enum.js';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailVerificationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AccountEmailVerificationSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    email: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;

export const AccountEmailVerificationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    email: z.boolean().optional()
  }).strict();

export const AccountEmailVerificationFindFirstOrThrowSchema: z.ZodType<Prisma.AccountEmailVerificationFindFirstOrThrowArgs> = z.object({ select: AccountEmailVerificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountEmailVerificationIncludeObjectSchema.optional()), orderBy: z.union([AccountEmailVerificationOrderByWithRelationInputObjectSchema, AccountEmailVerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailVerificationWhereInputObjectSchema.optional(), cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountEmailVerificationScalarFieldEnum, AccountEmailVerificationScalarFieldEnum.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindFirstOrThrowArgs>;

export const AccountEmailVerificationFindFirstOrThrowSchemaZodSchema = z.object({ select: AccountEmailVerificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountEmailVerificationIncludeObjectSchema.optional()), orderBy: z.union([AccountEmailVerificationOrderByWithRelationInputObjectSchema, AccountEmailVerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailVerificationWhereInputObjectSchema.optional(), cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountEmailVerificationScalarFieldEnum, AccountEmailVerificationScalarFieldEnum.array()]).optional() }).strict();