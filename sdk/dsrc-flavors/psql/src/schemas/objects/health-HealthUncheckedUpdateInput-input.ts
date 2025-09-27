import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './int-field-update-operations-input-IntFieldUpdateOperationsInput-input.js';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js';
import { EnumHealthStatusFieldUpdateOperationsInputObjectSchema as EnumHealthStatusFieldUpdateOperationsInputObjectSchema } from './enum-health-status-field-update-operations-input-EnumHealthStatusFieldUpdateOperationsInput-input.js';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './date-time-field-update-operations-input-DateTimeFieldUpdateOperationsInput-input.js';
import { NullableJsonNullValueInput as NullableJsonNullValueInputSchema } from '../enums/nullable-json-null-value-input-enum.js'

import { JsonValueSchema as jsonSchema } from '../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([HealthStatus, z.lazy(() => EnumHealthStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastChecked: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([NullableJsonNullValueInput, jsonSchema]).optional()
}).strict();
export const HealthUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.HealthUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthUncheckedUpdateInput>;
export const HealthUncheckedUpdateInputObjectZodSchema = makeSchema();
