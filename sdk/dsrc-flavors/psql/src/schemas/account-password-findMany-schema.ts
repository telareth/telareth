import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './objects/account-password-include-AccountPasswordInclude-input.js';
import { AccountPasswordOrderByWithRelationInputObjectSchema as AccountPasswordOrderByWithRelationInputObjectSchema } from './objects/account-password-AccountPasswordOrderByWithRelationInput-input.js';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './objects/account-password-AccountPasswordWhereInput-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './objects/account-password-AccountPasswordWhereUniqueInput-input.js';
import { AccountPasswordScalarFieldEnum } from './enums/account-password-scalar-field-enum-enum.js';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountPasswordFindManySelectSchema: z.ZodType<Prisma.AccountPasswordSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    password: z.boolean().optional(),
    account: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;

export const AccountPasswordFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    password: z.boolean().optional(),
    account: z.boolean().optional()
  }).strict();

export const AccountPasswordFindManySchema: z.ZodType<Prisma.AccountPasswordFindManyArgs> = z.object({ select: AccountPasswordFindManySelectSchema.optional(), include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()), orderBy: z.union([AccountPasswordOrderByWithRelationInputObjectSchema, AccountPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountPasswordWhereInputObjectSchema.optional(), cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountPasswordScalarFieldEnum, AccountPasswordScalarFieldEnum.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountPasswordFindManyArgs>;

export const AccountPasswordFindManySchemaZodSchema = z.object({ select: AccountPasswordFindManySelectSchema.optional(), include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()), orderBy: z.union([AccountPasswordOrderByWithRelationInputObjectSchema, AccountPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountPasswordWhereInputObjectSchema.optional(), cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountPasswordScalarFieldEnum, AccountPasswordScalarFieldEnum.array()]).optional() }).strict();