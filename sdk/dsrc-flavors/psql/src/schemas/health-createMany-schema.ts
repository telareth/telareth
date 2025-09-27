import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthCreateManyInputObjectSchema as HealthCreateManyInputObjectSchema } from './objects/health-HealthCreateManyInput-input.js';

export const HealthCreateManySchema: z.ZodType<Prisma.HealthCreateManyArgs> = z.object({ data: z.union([ HealthCreateManyInputObjectSchema, z.array(HealthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HealthCreateManyArgs>;

export const HealthCreateManySchemaZodSchema = z.object({ data: z.union([ HealthCreateManyInputObjectSchema, z.array(HealthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();