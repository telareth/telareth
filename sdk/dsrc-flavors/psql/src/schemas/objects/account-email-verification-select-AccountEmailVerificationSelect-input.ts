import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailArgsObjectSchema as AccountEmailArgsObjectSchema } from './account-email-AccountEmailArgs-input.js'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  email: z.union([z.boolean(), z.lazy(() => AccountEmailArgsObjectSchema)]).optional()
}).strict();
export const AccountEmailVerificationSelectObjectSchema: z.ZodType<Prisma.AccountEmailVerificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;
export const AccountEmailVerificationSelectObjectZodSchema = makeSchema();
