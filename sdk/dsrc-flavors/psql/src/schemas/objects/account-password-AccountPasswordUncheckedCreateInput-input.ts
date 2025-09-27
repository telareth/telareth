import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountUncheckedCreateNestedOneWithoutPasswordInputObjectSchema as AccountUncheckedCreateNestedOneWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedCreateNestedOneWithoutPasswordInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  password: z.string(),
  account: z.lazy(() => AccountUncheckedCreateNestedOneWithoutPasswordInputObjectSchema).optional()
}).strict();
export const AccountPasswordUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedCreateInput>;
export const AccountPasswordUncheckedCreateInputObjectZodSchema = makeSchema();
