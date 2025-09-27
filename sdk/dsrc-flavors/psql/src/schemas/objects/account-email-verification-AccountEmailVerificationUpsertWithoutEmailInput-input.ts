import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUpdateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationUpdateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedUpdateWithoutEmailInput-input.js';
import { AccountEmailVerificationCreateWithoutEmailInputObjectSchema as AccountEmailVerificationCreateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereInput-input.js'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountEmailVerificationCreateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema)]),
  where: z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationUpsertWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpsertWithoutEmailInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpsertWithoutEmailInput>;
export const AccountEmailVerificationUpsertWithoutEmailInputObjectZodSchema = makeSchema();
