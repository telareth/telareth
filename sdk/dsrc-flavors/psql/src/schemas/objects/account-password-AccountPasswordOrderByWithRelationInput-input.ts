import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './account-AccountOrderByWithRelationInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  createdAt: SortOrder.optional(),
  updatedAt: SortOrder.optional(),
  password: SortOrder.optional(),
  account: z.lazy(() => AccountOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountPasswordOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountPasswordOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordOrderByWithRelationInput>;
export const AccountPasswordOrderByWithRelationInputObjectZodSchema = makeSchema();
