import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { NullableJsonNullValueInput as NullableJsonNullValueInputSchema } from '../enums/nullable-json-null-value-input-enum.js'

import { JsonValueSchema as jsonSchema } from '../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: HealthStatus.optional(),
  lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  metadata: z.union([NullableJsonNullValueInput, jsonSchema]).optional()
}).strict();
export const HealthCreateManyInputObjectSchema: z.ZodType<Prisma.HealthCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthCreateManyInput>;
export const HealthCreateManyInputObjectZodSchema = makeSchema();
