import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  passwordId: z.literal(true).optional()
}).strict();
export const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountMaxAggregateInputType>;
export const AccountMaxAggregateInputObjectZodSchema = makeSchema();
