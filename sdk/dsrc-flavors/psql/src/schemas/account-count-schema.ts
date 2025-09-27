import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/account-AccountOrderByWithRelationInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/account-AccountWhereInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/account-AccountWhereUniqueInput-input.js';
import { AccountCountAggregateInputObjectSchema as AccountCountAggregateInputObjectSchema } from './objects/account-AccountCountAggregateInput-input.js';

export const AccountCountSchema: z.ZodType<Prisma.AccountCountArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountCountArgs>;

export const AccountCountSchemaZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict();