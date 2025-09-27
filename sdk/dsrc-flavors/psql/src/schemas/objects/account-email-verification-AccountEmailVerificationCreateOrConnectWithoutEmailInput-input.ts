import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationWhereUniqueInputObjectSchema as AccountEmailVerificationWhereUniqueInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereUniqueInput-input.js';
import { AccountEmailVerificationCreateWithoutEmailInputObjectSchema as AccountEmailVerificationCreateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedCreateWithoutEmailInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailVerificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountEmailVerificationCreateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema)])
}).strict();
export const AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateOrConnectWithoutEmailInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateOrConnectWithoutEmailInput>;
export const AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectZodSchema = makeSchema();
