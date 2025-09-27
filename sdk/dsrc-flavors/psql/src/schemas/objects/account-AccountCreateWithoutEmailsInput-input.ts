import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema as AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateNestedOneWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  deletedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)),
  isActive: z.boolean().optional(),
  password: z.lazy(() => AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema)
}).strict();
export const AccountCreateWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateWithoutEmailsInput>;
export const AccountCreateWithoutEmailsInputObjectZodSchema = makeSchema();
