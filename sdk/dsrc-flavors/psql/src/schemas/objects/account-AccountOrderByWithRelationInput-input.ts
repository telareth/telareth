import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { AccountEmailOrderByRelationAggregateInputObjectSchema as AccountEmailOrderByRelationAggregateInputObjectSchema } from './account-email-AccountEmailOrderByRelationAggregateInput-input.js';
import { AccountPasswordOrderByWithRelationInputObjectSchema as AccountPasswordOrderByWithRelationInputObjectSchema } from './account-password-AccountPasswordOrderByWithRelationInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  deletedAt: SortOrder.optional(),
  isActive: SortOrder.optional(),
  passwordId: SortOrder.optional(),
  emails: z.lazy(() => AccountEmailOrderByRelationAggregateInputObjectSchema).optional(),
  password: z.lazy(() => AccountPasswordOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectZodSchema = makeSchema();
