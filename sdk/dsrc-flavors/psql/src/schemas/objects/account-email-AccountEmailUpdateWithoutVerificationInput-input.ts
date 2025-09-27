import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './string-field-update-operations-input-StringFieldUpdateOperationsInput-input.js';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './date-time-field-update-operations-input-DateTimeFieldUpdateOperationsInput-input.js';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './bool-field-update-operations-input-BoolFieldUpdateOperationsInput-input.js';
import { AccountUpdateOneWithoutEmailsNestedInputObjectSchema as AccountUpdateOneWithoutEmailsNestedInputObjectSchema } from './account-update-one-without-emails-nested-input-AccountUpdateOneWithoutEmailsNestedInput-input.js'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  account: z.lazy(() => AccountUpdateOneWithoutEmailsNestedInputObjectSchema).optional()
}).strict();
export const AccountEmailUpdateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpdateWithoutVerificationInput>;
export const AccountEmailUpdateWithoutVerificationInputObjectZodSchema = makeSchema();
