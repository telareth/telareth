import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema as AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateNestedManyWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  deletedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)),
  isActive: z.boolean().optional(),
  emails: z.lazy(() => AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema).optional()
}).strict();
export const AccountUncheckedCreateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutPasswordInput>;
export const AccountUncheckedCreateWithoutPasswordInputObjectZodSchema = makeSchema();
