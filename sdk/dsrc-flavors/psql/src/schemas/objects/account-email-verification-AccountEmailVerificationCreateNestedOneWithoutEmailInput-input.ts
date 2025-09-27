import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationCreateWithoutEmailInputObjectSchema as AccountEmailVerificationCreateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema as AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateOrConnectWithoutEmailInput-input.js';
import { AccountEmailVerificationWhereUniqueInputObjectSchema as AccountEmailVerificationWhereUniqueInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailVerificationCreateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema).optional(),
  connect: z.lazy(() => AccountEmailVerificationWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateNestedOneWithoutEmailInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateNestedOneWithoutEmailInput>;
export const AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectZodSchema = makeSchema();
