import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthUpdateManyMutationInputObjectSchema as HealthUpdateManyMutationInputObjectSchema } from './objects/health-HealthUpdateManyMutationInput-input.js';
import { HealthWhereInputObjectSchema as HealthWhereInputObjectSchema } from './objects/health-HealthWhereInput-input.js';

export const HealthUpdateManySchema: z.ZodType<Prisma.HealthUpdateManyArgs> = z.object({ data: HealthUpdateManyMutationInputObjectSchema, where: HealthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HealthUpdateManyArgs>;

export const HealthUpdateManySchemaZodSchema = z.object({ data: HealthUpdateManyMutationInputObjectSchema, where: HealthWhereInputObjectSchema.optional() }).strict();