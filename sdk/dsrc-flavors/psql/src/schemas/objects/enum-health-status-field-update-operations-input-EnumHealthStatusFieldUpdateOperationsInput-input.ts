import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js'

const makeSchema = () => z.object({
  set: HealthStatus.optional()
}).strict();
export const EnumHealthStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumHealthStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumHealthStatusFieldUpdateOperationsInput>;
export const EnumHealthStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
