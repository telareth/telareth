import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthWhereInputObjectSchema as HealthWhereInputObjectSchema } from './objects/health-HealthWhereInput-input.js';

export const HealthDeleteManySchema: z.ZodType<Prisma.HealthDeleteManyArgs> = z.object({ where: HealthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HealthDeleteManyArgs>;

export const HealthDeleteManySchemaZodSchema = z.object({ where: HealthWhereInputObjectSchema.optional() }).strict();