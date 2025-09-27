import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateNestedManyWithoutAccountInputObjectSchema as AccountEmailCreateNestedManyWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateNestedManyWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  deletedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)),
  isActive: z.boolean().optional(),
  emails: z.lazy(() => AccountEmailCreateNestedManyWithoutAccountInputObjectSchema).optional()
}).strict();
export const AccountCreateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateWithoutPasswordInput>;
export const AccountCreateWithoutPasswordInputObjectZodSchema = makeSchema();
