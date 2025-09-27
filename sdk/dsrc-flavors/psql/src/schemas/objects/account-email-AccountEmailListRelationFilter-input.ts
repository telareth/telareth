import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js'

const makeSchema = () => z.object({
  every: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
  some: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
  none: z.lazy(() => AccountEmailWhereInputObjectSchema).optional()
}).strict();
export const AccountEmailListRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailListRelationFilter>;
export const AccountEmailListRelationFilterObjectZodSchema = makeSchema();
