import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './account-AccountArgs-input.js'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  password: z.boolean().optional(),
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional()
}).strict();
export const AccountPasswordSelectObjectSchema: z.ZodType<Prisma.AccountPasswordSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;
export const AccountPasswordSelectObjectZodSchema = makeSchema();
