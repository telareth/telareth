import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { SortOrder as SortOrderSchema } from '../enums/sort-order-enum.js';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './sort-order-input-SortOrderInput-input.js'

const makeSchema = () => z.object({
  id: SortOrder.optional(),
  status: SortOrder.optional(),
  lastChecked: SortOrder.optional(),
  metadata: z.union([SortOrder, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const HealthOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HealthOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HealthOrderByWithRelationInput>;
export const HealthOrderByWithRelationInputObjectZodSchema = makeSchema();
