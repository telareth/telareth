import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").transform(v => new Date(v)).optional()
}).strict();
export const AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateWithoutEmailInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateWithoutEmailInput>;
export const AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectZodSchema = makeSchema();
