import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  password: z.literal(true).optional()
}).strict();
export const AccountPasswordMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordMinAggregateInputType>;
export const AccountPasswordMinAggregateInputObjectZodSchema = makeSchema();
