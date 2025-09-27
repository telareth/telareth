import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateNestedOneWithoutEmailsInputObjectSchema as AccountCreateNestedOneWithoutEmailsInputObjectSchema } from './account-AccountCreateNestedOneWithoutEmailsInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.string(),
  isPrimary: z.boolean().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutEmailsInputObjectSchema).optional()
}).strict();
export const AccountEmailCreateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateWithoutVerificationInput>;
export const AccountEmailCreateWithoutVerificationInputObjectZodSchema = makeSchema();
