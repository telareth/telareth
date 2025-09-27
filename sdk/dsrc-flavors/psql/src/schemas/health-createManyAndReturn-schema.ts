import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthCreateManyInputObjectSchema as HealthCreateManyInputObjectSchema } from './objects/health-HealthCreateManyInput-input.js';

export const HealthCreateManyAndReturnSchema: z.ZodType<Prisma.HealthCreateManyAndReturnArgs> = z.object({ select: HealthSelectObjectSchema.optional(), data: z.union([ HealthCreateManyInputObjectSchema, z.array(HealthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HealthCreateManyAndReturnArgs>;

export const HealthCreateManyAndReturnSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(), data: z.union([ HealthCreateManyInputObjectSchema, z.array(HealthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();