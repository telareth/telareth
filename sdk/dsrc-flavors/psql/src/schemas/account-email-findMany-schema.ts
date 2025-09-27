import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './objects/account-email-include-AccountEmailInclude-input.js';
import { AccountEmailOrderByWithRelationInputObjectSchema as AccountEmailOrderByWithRelationInputObjectSchema } from './objects/account-email-AccountEmailOrderByWithRelationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './objects/account-email-AccountEmailWhereInput-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './objects/account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailScalarFieldEnum } from './enums/account-email-scalar-field-enum-enum.js';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailFindManySelectSchema: z.ZodType<Prisma.AccountEmailSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    email: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    account: z.boolean().optional(),
    accountId: z.boolean().optional(),
    verification: z.boolean().optional(),
    verificationId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountEmailSelect>;

export const AccountEmailFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    email: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    account: z.boolean().optional(),
    accountId: z.boolean().optional(),
    verification: z.boolean().optional(),
    verificationId: z.boolean().optional()
  }).strict();

export const AccountEmailFindManySchema: z.ZodType<Prisma.AccountEmailFindManyArgs> = z.object({ select: AccountEmailFindManySelectSchema.optional(), include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()), orderBy: z.union([AccountEmailOrderByWithRelationInputObjectSchema, AccountEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailWhereInputObjectSchema.optional(), cursor: AccountEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountEmailScalarFieldEnum, AccountEmailScalarFieldEnum.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailFindManyArgs>;

export const AccountEmailFindManySchemaZodSchema = z.object({ select: AccountEmailFindManySelectSchema.optional(), include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()), orderBy: z.union([AccountEmailOrderByWithRelationInputObjectSchema, AccountEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailWhereInputObjectSchema.optional(), cursor: AccountEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountEmailScalarFieldEnum, AccountEmailScalarFieldEnum.array()]).optional() }).strict();