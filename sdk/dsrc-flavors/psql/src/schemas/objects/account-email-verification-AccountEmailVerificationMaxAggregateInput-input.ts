import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AccountEmailVerificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMaxAggregateInputType>;
export const AccountEmailVerificationMaxAggregateInputObjectZodSchema = makeSchema();
