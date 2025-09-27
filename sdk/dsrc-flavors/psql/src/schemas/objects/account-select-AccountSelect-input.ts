import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailFindManySchema as AccountEmailFindManySchema } from '../account-email-findMany-schema.js';
import { AccountPasswordArgsObjectSchema as AccountPasswordArgsObjectSchema } from './account-password-AccountPasswordArgs-input.js';
import { AccountCountOutputTypeArgsObjectSchema as AccountCountOutputTypeArgsObjectSchema } from './account-count-output-type-AccountCountOutputTypeArgs-input.js'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  emails: z.union([z.boolean(), z.lazy(() => AccountEmailFindManySchema)]).optional(),
  password: z.union([z.boolean(), z.lazy(() => AccountPasswordArgsObjectSchema)]).optional(),
  passwordId: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AccountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectZodSchema = makeSchema();
