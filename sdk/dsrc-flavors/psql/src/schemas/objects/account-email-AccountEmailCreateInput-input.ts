import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateNestedOneWithoutEmailsInputObjectSchema as AccountCreateNestedOneWithoutEmailsInputObjectSchema } from './account-AccountCreateNestedOneWithoutEmailsInput-input.js';
import { AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema as AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateNestedOneWithoutEmailInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.string(),
  isPrimary: z.boolean().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutEmailsInputObjectSchema).optional(),
  verification: z.lazy(() => AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema).optional()
}).strict();
export const AccountEmailCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateInput>;
export const AccountEmailCreateInputObjectZodSchema = makeSchema();
