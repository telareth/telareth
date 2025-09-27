import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './string-field-update-operations-input-StringFieldUpdateOperationsInput-input.js';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './date-time-field-update-operations-input-DateTimeFieldUpdateOperationsInput-input.js'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedUpdateWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedUpdateWithoutAccountInput>;
export const AccountPasswordUncheckedUpdateWithoutAccountInputObjectZodSchema = makeSchema();
