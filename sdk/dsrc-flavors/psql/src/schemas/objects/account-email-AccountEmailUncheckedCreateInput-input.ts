import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.string(),
  isPrimary: z.boolean().optional(),
  accountId: z.string().optional().nullable(),
  verificationId: z.string().optional().nullable()
}).strict();
export const AccountEmailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateInput>;
export const AccountEmailUncheckedCreateInputObjectZodSchema = makeSchema();
