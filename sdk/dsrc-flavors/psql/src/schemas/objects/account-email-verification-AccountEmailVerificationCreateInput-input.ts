import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateNestedOneWithoutVerificationInputObjectSchema as AccountEmailCreateNestedOneWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateNestedOneWithoutVerificationInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.lazy(() => AccountEmailCreateNestedOneWithoutVerificationInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateInput>;
export const AccountEmailVerificationCreateInputObjectZodSchema = makeSchema();
