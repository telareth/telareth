import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { NullableJsonNullValueInput as NullableJsonNullValueInputSchema } from '../enums/nullable-json-null-value-input-enum.js'

import { JsonValueSchema as jsonSchema } from '../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: HealthStatus.optional(),
  metadata: z.union([NullableJsonNullValueInput, jsonSchema]).optional()
}).strict();
export const HealthCreateInputObjectSchema: z.ZodType<Prisma.HealthCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthCreateInput>;
export const HealthCreateInputObjectZodSchema = makeSchema();
