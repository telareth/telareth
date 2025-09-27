import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/account-include-AccountInclude-input.js';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/account-AccountOrderByWithRelationInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/account-AccountWhereInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/account-AccountWhereUniqueInput-input.js';
import { AccountScalarFieldEnum } from './enums/account-scalar-field-enum-enum.js';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindManySelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    isActive: z.boolean().optional(),
    emails: z.boolean().optional(),
    password: z.boolean().optional(),
    passwordId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    isActive: z.boolean().optional(),
    emails: z.boolean().optional(),
    password: z.boolean().optional(),
    passwordId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AccountFindManySchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({ select: AccountFindManySelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnum, AccountScalarFieldEnum.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindManyArgs>;

export const AccountFindManySchemaZodSchema = z.object({ select: AccountFindManySelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnum, AccountScalarFieldEnum.array()]).optional() }).strict();