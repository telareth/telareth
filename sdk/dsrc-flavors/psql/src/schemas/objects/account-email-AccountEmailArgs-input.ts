import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailSelectObjectSchema as AccountEmailSelectObjectSchema } from './account-email-select-AccountEmailSelect-input.js';
import { AccountEmailIncludeObjectSchema as AccountEmailIncludeObjectSchema } from './account-email-include-AccountEmailInclude-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountEmailSelectObjectSchema).optional(),
  include: z.lazy(() => AccountEmailIncludeObjectSchema).optional()
}).strict();
export const AccountEmailArgsObjectSchema = makeSchema();
export const AccountEmailArgsObjectZodSchema = makeSchema();
