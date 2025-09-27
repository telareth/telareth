import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailFindManySchema as AccountEmailFindManySchema } from '../account-email-findMany-schema.js';
import { AccountPasswordArgsObjectSchema as AccountPasswordArgsObjectSchema } from './account-password-AccountPasswordArgs-input.js';
import { AccountCountOutputTypeArgsObjectSchema as AccountCountOutputTypeArgsObjectSchema } from './account-count-output-type-AccountCountOutputTypeArgs-input.js'

const makeSchema = () => z.object({
  emails: z.union([z.boolean(), z.lazy(() => AccountEmailFindManySchema)]).optional(),
  password: z.union([z.boolean(), z.lazy(() => AccountPasswordArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AccountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountInclude>;
export const AccountIncludeObjectZodSchema = makeSchema();
