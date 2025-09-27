import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema as AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateNestedOneWithoutVerificationInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.lazy(() => AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateInput>;
export const AccountEmailVerificationUncheckedCreateInputObjectZodSchema = makeSchema();
