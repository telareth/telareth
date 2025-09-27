import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthUpdateInputObjectSchema as HealthUpdateInputObjectSchema } from './objects/health-HealthUpdateInput-input.js';
import { HealthUncheckedUpdateInputObjectSchema as HealthUncheckedUpdateInputObjectSchema } from './objects/health-HealthUncheckedUpdateInput-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';

export const HealthUpdateOneSchema: z.ZodType<Prisma.HealthUpdateArgs> = z.object({ select: HealthSelectObjectSchema.optional(),  data: z.union([HealthUpdateInputObjectSchema, HealthUncheckedUpdateInputObjectSchema]), where: HealthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HealthUpdateArgs>;

export const HealthUpdateOneSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(),  data: z.union([HealthUpdateInputObjectSchema, HealthUncheckedUpdateInputObjectSchema]), where: HealthWhereUniqueInputObjectSchema }).strict();