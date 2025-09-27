import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';

export const HealthFindUniqueSchema: z.ZodType<Prisma.HealthFindUniqueArgs> = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HealthFindUniqueArgs>;

export const HealthFindUniqueSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema }).strict();