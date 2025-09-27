import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordSelectObjectSchema as AccountPasswordSelectObjectSchema } from './account-password-select-AccountPasswordSelect-input.js';
import { AccountPasswordIncludeObjectSchema as AccountPasswordIncludeObjectSchema } from './account-password-include-AccountPasswordInclude-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountPasswordSelectObjectSchema).optional(),
  include: z.lazy(() => AccountPasswordIncludeObjectSchema).optional()
}).strict();
export const AccountPasswordArgsObjectSchema = makeSchema();
export const AccountPasswordArgsObjectZodSchema = makeSchema();
