import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthOrderByWithRelationInputObjectSchema as HealthOrderByWithRelationInputObjectSchema } from './objects/health-HealthOrderByWithRelationInput-input.js';
import { HealthWhereInputObjectSchema as HealthWhereInputObjectSchema } from './objects/health-HealthWhereInput-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';
import { HealthCountAggregateInputObjectSchema as HealthCountAggregateInputObjectSchema } from './objects/health-HealthCountAggregateInput-input.js';

export const HealthCountSchema: z.ZodType<Prisma.HealthCountArgs> = z.object({ orderBy: z.union([HealthOrderByWithRelationInputObjectSchema, HealthOrderByWithRelationInputObjectSchema.array()]).optional(), where: HealthWhereInputObjectSchema.optional(), cursor: HealthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HealthCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HealthCountArgs>;

export const HealthCountSchemaZodSchema = z.object({ orderBy: z.union([HealthOrderByWithRelationInputObjectSchema, HealthOrderByWithRelationInputObjectSchema.array()]).optional(), where: HealthWhereInputObjectSchema.optional(), cursor: HealthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HealthCountAggregateInputObjectSchema ]).optional() }).strict();