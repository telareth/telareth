import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  email: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  accountId: z.literal(true).optional(),
  verificationId: z.literal(true).optional()
}).strict();
export const AccountEmailMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailMaxAggregateInputType>;
export const AccountEmailMaxAggregateInputObjectZodSchema = makeSchema();
