import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional(),
  password: z.string()
}).strict();
export const AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedCreateWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedCreateWithoutAccountInput>;
export const AccountPasswordUncheckedCreateWithoutAccountInputObjectZodSchema = makeSchema();
