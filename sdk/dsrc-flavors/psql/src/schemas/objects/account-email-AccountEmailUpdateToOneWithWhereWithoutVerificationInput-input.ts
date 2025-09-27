import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js';
import { AccountEmailUpdateWithoutVerificationInputObjectSchema as AccountEmailUpdateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailUpdateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema as AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedUpdateWithoutVerificationInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountEmailUpdateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema)])
}).strict();
export const AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateToOneWithWhereWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpdateToOneWithWhereWithoutVerificationInput>;
export const AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectZodSchema = makeSchema();
