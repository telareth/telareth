import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './account-AccountArgs-input.js';
import { AccountEmailVerificationArgsObjectSchema as AccountEmailVerificationArgsObjectSchema } from './account-email-verification-AccountEmailVerificationArgs-input.js'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  email: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional(),
  accountId: z.boolean().optional(),
  verification: z.union([z.boolean(), z.lazy(() => AccountEmailVerificationArgsObjectSchema)]).optional(),
  verificationId: z.boolean().optional()
}).strict();
export const AccountEmailSelectObjectSchema: z.ZodType<Prisma.AccountEmailSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailSelect>;
export const AccountEmailSelectObjectZodSchema = makeSchema();
