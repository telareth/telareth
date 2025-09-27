import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AccountEmailVerificationMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMinAggregateInputType>;
export const AccountEmailVerificationMinAggregateInputObjectZodSchema = makeSchema();
