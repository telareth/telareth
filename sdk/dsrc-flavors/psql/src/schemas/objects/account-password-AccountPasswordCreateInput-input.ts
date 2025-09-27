import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateNestedOneWithoutPasswordInputObjectSchema as AccountCreateNestedOneWithoutPasswordInputObjectSchema } from './account-AccountCreateNestedOneWithoutPasswordInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  password: z.string(),
  account: z.lazy(() => AccountCreateNestedOneWithoutPasswordInputObjectSchema).optional()
}).strict();
export const AccountPasswordCreateInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordCreateInput>;
export const AccountPasswordCreateInputObjectZodSchema = makeSchema();
