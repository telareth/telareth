import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './account-password-AccountPasswordWhereInput-input.js'

const makeSchema = () => z.object({
  is: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional()
}).strict();
export const AccountPasswordScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountPasswordScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordScalarRelationFilter>;
export const AccountPasswordScalarRelationFilterObjectZodSchema = makeSchema();
