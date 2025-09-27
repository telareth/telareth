import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthOrderByWithRelationInputObjectSchema as HealthOrderByWithRelationInputObjectSchema } from './objects/health-HealthOrderByWithRelationInput-input.js';
import { HealthWhereInputObjectSchema as HealthWhereInputObjectSchema } from './objects/health-HealthWhereInput-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';
import { HealthScalarFieldEnum } from './enums/health-scalar-field-enum-enum.js';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HealthFindFirstSelectSchema: z.ZodType<Prisma.HealthSelect> = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    metadata: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HealthSelect>;

export const HealthFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    metadata: z.boolean().optional()
  }).strict();

export const HealthFindFirstSchema: z.ZodType<Prisma.HealthFindFirstArgs> = z.object({ select: HealthFindFirstSelectSchema.optional(),  orderBy: z.union([HealthOrderByWithRelationInputObjectSchema, HealthOrderByWithRelationInputObjectSchema.array()]).optional(), where: HealthWhereInputObjectSchema.optional(), cursor: HealthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HealthScalarFieldEnum, HealthScalarFieldEnum.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HealthFindFirstArgs>;

export const HealthFindFirstSchemaZodSchema = z.object({ select: HealthFindFirstSelectSchema.optional(),  orderBy: z.union([HealthOrderByWithRelationInputObjectSchema, HealthOrderByWithRelationInputObjectSchema.array()]).optional(), where: HealthWhereInputObjectSchema.optional(), cursor: HealthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HealthScalarFieldEnum, HealthScalarFieldEnum.array()]).optional() }).strict();