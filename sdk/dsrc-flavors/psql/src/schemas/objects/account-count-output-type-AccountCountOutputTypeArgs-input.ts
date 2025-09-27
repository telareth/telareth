import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCountOutputTypeSelectObjectSchema as AccountCountOutputTypeSelectObjectSchema } from './account-count-output-type-select-AccountCountOutputTypeSelect-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AccountCountOutputTypeArgsObjectSchema = makeSchema();
export const AccountCountOutputTypeArgsObjectZodSchema = makeSchema();
