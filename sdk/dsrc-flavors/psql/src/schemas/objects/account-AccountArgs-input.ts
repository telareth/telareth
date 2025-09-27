import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './account-select-AccountSelect-input.js';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './account-include-AccountInclude-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountSelectObjectSchema).optional(),
  include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict();
export const AccountArgsObjectSchema = makeSchema();
export const AccountArgsObjectZodSchema = makeSchema();
