import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereInput-input.js';
import { AccountEmailVerificationUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUpdateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationUpdateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedUpdateWithoutEmailInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema)])
}).strict();
export const AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput>;
export const AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectZodSchema = makeSchema();
