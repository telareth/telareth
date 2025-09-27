import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './account-AccountArgs-input.js'

const makeSchema = () => z.object({
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional()
}).strict();
export const AccountPasswordIncludeObjectSchema: z.ZodType<Prisma.AccountPasswordInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordInclude>;
export const AccountPasswordIncludeObjectZodSchema = makeSchema();
