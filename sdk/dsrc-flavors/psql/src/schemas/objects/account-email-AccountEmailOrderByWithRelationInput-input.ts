import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './sort-order-input-SortOrderInput-input.js';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './account-AccountOrderByWithRelationInput-input.js';
import { AccountEmailVerificationOrderByWithRelationInputObjectSchema as AccountEmailVerificationOrderByWithRelationInputObjectSchema } from './account-email-verification-AccountEmailVerificationOrderByWithRelationInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  email: SortOrder.optional(),
  isPrimary: SortOrder.optional(),
  accountId: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verificationId: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  account: z.lazy(() => AccountOrderByWithRelationInputObjectSchema).optional(),
  verification: z.lazy(() => AccountEmailVerificationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountEmailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailOrderByWithRelationInput>;
export const AccountEmailOrderByWithRelationInputObjectZodSchema = makeSchema();
