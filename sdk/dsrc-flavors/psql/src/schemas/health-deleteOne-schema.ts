import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';

export const HealthDeleteOneSchema: z.ZodType<Prisma.HealthDeleteArgs> = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HealthDeleteArgs>;

export const HealthDeleteOneSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema }).strict();