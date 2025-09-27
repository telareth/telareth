import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateNestedManyWithoutAccountInputObjectSchema as AccountEmailCreateNestedManyWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateNestedManyWithoutAccountInput-input.js';
import { AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema as AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateNestedOneWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  deletedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)),
  isActive: z.boolean().optional(),
  emails: z.lazy(() => AccountEmailCreateNestedManyWithoutAccountInputObjectSchema),
  password: z.lazy(() => AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema = makeSchema();
