import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  password: z.literal(true).optional()
}).strict();
export const AccountPasswordMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordMaxAggregateInputType>;
export const AccountPasswordMaxAggregateInputObjectZodSchema = makeSchema();
