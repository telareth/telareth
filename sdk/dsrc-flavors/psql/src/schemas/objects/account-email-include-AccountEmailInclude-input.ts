import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './account-AccountArgs-input.js';
import { AccountEmailVerificationArgsObjectSchema as AccountEmailVerificationArgsObjectSchema } from './account-email-verification-AccountEmailVerificationArgs-input.js'

const makeSchema = () => z.object({
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional(),
  verification: z.union([z.boolean(), z.lazy(() => AccountEmailVerificationArgsObjectSchema)]).optional()
}).strict();
export const AccountEmailIncludeObjectSchema: z.ZodType<Prisma.AccountEmailInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailInclude>;
export const AccountEmailIncludeObjectZodSchema = makeSchema();
