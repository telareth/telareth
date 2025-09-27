import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailUpdateWithoutVerificationInputObjectSchema as AccountEmailUpdateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailUpdateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema as AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedUpdateWithoutVerificationInput-input.js';
import { AccountEmailCreateWithoutVerificationInputObjectSchema as AccountEmailCreateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema as AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutVerificationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountEmailUpdateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema)]),
  where: z.lazy(() => AccountEmailWhereInputObjectSchema).optional()
}).strict();
export const AccountEmailUpsertWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpsertWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpsertWithoutVerificationInput>;
export const AccountEmailUpsertWithoutVerificationInputObjectZodSchema = makeSchema();
