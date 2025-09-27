import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AccountEmailVerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCountAggregateInputType>;
export const AccountEmailVerificationCountAggregateInputObjectZodSchema = makeSchema();
