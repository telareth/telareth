import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { AccountEmailOrderByWithRelationInputObjectSchema as AccountEmailOrderByWithRelationInputObjectSchema } from './account-email-AccountEmailOrderByWithRelationInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  email: z.lazy(() => AccountEmailOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationOrderByWithRelationInput>;
export const AccountEmailVerificationOrderByWithRelationInputObjectZodSchema = makeSchema();
