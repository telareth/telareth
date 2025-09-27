import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { AccountEmailOrderByWithRelationInputObjectSchema as AccountEmailOrderByWithRelationInputObjectSchema } from './objects/account-email-AccountEmailOrderByWithRelationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './objects/account-email-AccountEmailWhereInput-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './objects/account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailCountAggregateInputObjectSchema as AccountEmailCountAggregateInputObjectSchema } from './objects/account-email-AccountEmailCountAggregateInput-input.js';

export const AccountEmailCountSchema: z.ZodType<Prisma.AccountEmailCountArgs> = z.object({ orderBy: z.union([AccountEmailOrderByWithRelationInputObjectSchema, AccountEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailWhereInputObjectSchema.optional(), cursor: AccountEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountEmailCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountEmailCountArgs>;

export const AccountEmailCountSchemaZodSchema = z.object({ orderBy: z.union([AccountEmailOrderByWithRelationInputObjectSchema, AccountEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountEmailWhereInputObjectSchema.optional(), cursor: AccountEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountEmailCountAggregateInputObjectSchema ]).optional() }).strict();