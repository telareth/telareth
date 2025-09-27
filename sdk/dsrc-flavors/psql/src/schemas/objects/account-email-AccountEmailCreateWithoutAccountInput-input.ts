import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema as AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateNestedOneWithoutEmailInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.string(),
  isPrimary: z.boolean().optional(),
  verification: z.lazy(() => AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema).optional()
}).strict();
export const AccountEmailCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateWithoutAccountInput>;
export const AccountEmailCreateWithoutAccountInputObjectZodSchema = makeSchema();
