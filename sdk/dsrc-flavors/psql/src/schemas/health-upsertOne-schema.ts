import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthWhereUniqueInputObjectSchema as HealthWhereUniqueInputObjectSchema } from './objects/health-HealthWhereUniqueInput-input.js';
import { HealthCreateInputObjectSchema as HealthCreateInputObjectSchema } from './objects/health-HealthCreateInput-input.js';
import { HealthUncheckedCreateInputObjectSchema as HealthUncheckedCreateInputObjectSchema } from './objects/health-HealthUncheckedCreateInput-input.js';
import { HealthUpdateInputObjectSchema as HealthUpdateInputObjectSchema } from './objects/health-HealthUpdateInput-input.js';
import { HealthUncheckedUpdateInputObjectSchema as HealthUncheckedUpdateInputObjectSchema } from './objects/health-HealthUncheckedUpdateInput-input.js';

export const HealthUpsertOneSchema: z.ZodType<Prisma.HealthUpsertArgs> = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema, create: z.union([ HealthCreateInputObjectSchema, HealthUncheckedCreateInputObjectSchema ]), update: z.union([ HealthUpdateInputObjectSchema, HealthUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HealthUpsertArgs>;

export const HealthUpsertOneSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(),  where: HealthWhereUniqueInputObjectSchema, create: z.union([ HealthCreateInputObjectSchema, HealthUncheckedCreateInputObjectSchema ]), update: z.union([ HealthUpdateInputObjectSchema, HealthUncheckedUpdateInputObjectSchema ]) }).strict();