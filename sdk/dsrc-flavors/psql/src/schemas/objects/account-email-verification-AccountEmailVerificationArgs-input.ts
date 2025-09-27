import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationSelectObjectSchema as AccountEmailVerificationSelectObjectSchema } from './account-email-verification-select-AccountEmailVerificationSelect-input.js';
import { AccountEmailVerificationIncludeObjectSchema as AccountEmailVerificationIncludeObjectSchema } from './account-email-verification-include-AccountEmailVerificationInclude-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountEmailVerificationSelectObjectSchema).optional(),
  include: z.lazy(() => AccountEmailVerificationIncludeObjectSchema).optional()
}).strict();
export const AccountEmailVerificationArgsObjectSchema = makeSchema();
export const AccountEmailVerificationArgsObjectZodSchema = makeSchema();
