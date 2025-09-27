import type { Prisma } from '../dsrc/client';
import { z } from 'zod';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './objects/health-select-HealthSelect-input.js';
import { HealthCreateInputObjectSchema as HealthCreateInputObjectSchema } from './objects/health-HealthCreateInput-input.js';
import { HealthUncheckedCreateInputObjectSchema as HealthUncheckedCreateInputObjectSchema } from './objects/health-HealthUncheckedCreateInput-input.js';

export const HealthCreateOneSchema: z.ZodType<Prisma.HealthCreateArgs> = z.object({ select: HealthSelectObjectSchema.optional(),  data: z.union([HealthCreateInputObjectSchema, HealthUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HealthCreateArgs>;

export const HealthCreateOneSchemaZodSchema = z.object({ select: HealthSelectObjectSchema.optional(),  data: z.union([HealthCreateInputObjectSchema, HealthUncheckedCreateInputObjectSchema]) }).strict();