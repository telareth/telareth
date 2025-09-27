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
export const AccountEmailMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailMinAggregateInputType>;
export const AccountEmailMinAggregateInputObjectZodSchema = makeSchema();
