import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthUpdateManyMutationInputObjectSchema as HealthUpdateManyMutationInputObjectSchema } from './objects/health-HealthUpdateManyMutationInput-input.js';
import { HealthWhereInputObjectSchema as HealthWhereInputObjectSchema } from './objects/health-HealthWhereInput-input.js';

export const HealthUpdateManyAndReturnSchema: z.ZodType<Prisma.HealthUpdateManyAndReturnArgs> = z.object({ select: HealthSelectObjectSchema.optional(), data: HealthUpdateManyMutationInputObjectSchema, where: HealthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HealthUpdateManyAndReturnArgs>;

export const HealthUpdateManyAndReturnSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(), data: HealthUpdateManyMutationInputObjectSchema, where: HealthWhereInputObjectSchema.optional() }).strict();