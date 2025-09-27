import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/account-AccountOrderByWithRelationInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/account-AccountWhereInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/account-AccountWhereUniqueInput-input.js';
import { AccountCountAggregateInputObjectSchema as AccountCountAggregateInputObjectSchema } from './objects/account-AccountCountAggregateInput-input.js';
import { AccountMinAggregateInputObjectSchema as AccountMinAggregateInputObjectSchema } from './objects/account-AccountMinAggregateInput-input.js';
import { AccountMaxAggregateInputObjectSchema as AccountMaxAggregateInputObjectSchema } from './objects/account-AccountMaxAggregateInput-input.js';

export const AccountAggregateSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountAggregateArgs>;

export const AccountAggregateSchemaZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();