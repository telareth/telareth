import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateManyAccountInputObjectSchema as AccountEmailCreateManyAccountInputObjectSchema } from './account-AccountEmailCreateManyAccountInput-input.js'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AccountEmailCreateManyAccountInputObjectSchema), z.lazy(() => AccountEmailCreateManyAccountInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountEmailCreateManyAccountInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountEmailCreateManyAccountInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateManyAccountInputEnvelope>;
export const AccountEmailCreateManyAccountInputEnvelopeObjectZodSchema = makeSchema();
