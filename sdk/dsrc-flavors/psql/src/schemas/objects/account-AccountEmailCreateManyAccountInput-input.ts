import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  email: z.string(),
  isPrimary: z.boolean().optional(),
  verificationId: z.string().optional().nullable()
}).strict();
export const AccountEmailCreateManyAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateManyAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateManyAccountInput>;
export const AccountEmailCreateManyAccountInputObjectZodSchema = makeSchema();
