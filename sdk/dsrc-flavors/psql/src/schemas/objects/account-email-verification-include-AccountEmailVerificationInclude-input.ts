import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailArgsObjectSchema as AccountEmailArgsObjectSchema } from './account-email-AccountEmailArgs-input.js'

const makeSchema = () => z.object({
  email: z.union([z.boolean(), z.lazy(() => AccountEmailArgsObjectSchema)]).optional()
}).strict();
export const AccountEmailVerificationIncludeObjectSchema: z.ZodType<Prisma.AccountEmailVerificationInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationInclude>;
export const AccountEmailVerificationIncludeObjectZodSchema = makeSchema();
