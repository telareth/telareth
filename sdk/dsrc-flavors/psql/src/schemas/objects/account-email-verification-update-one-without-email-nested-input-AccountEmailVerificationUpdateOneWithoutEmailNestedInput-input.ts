import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailVerificationCreateWithoutEmailInputObjectSchema as AccountEmailVerificationCreateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedCreateWithoutEmailInput-input.js';
import { AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema as AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationCreateOrConnectWithoutEmailInput-input.js';
import { AccountEmailVerificationUpsertWithoutEmailInputObjectSchema as AccountEmailVerificationUpsertWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationUpsertWithoutEmailInput-input.js';
import { AccountEmailVerificationWhereInputObjectSchema as AccountEmailVerificationWhereInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereInput-input.js';
import { AccountEmailVerificationWhereUniqueInputObjectSchema as AccountEmailVerificationWhereUniqueInputObjectSchema } from './account-email-verification-AccountEmailVerificationWhereUniqueInput-input.js';
import { AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema as AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput-input.js';
import { AccountEmailVerificationUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUpdateWithoutEmailInputObjectSchema } from './account-email-verification-AccountEmailVerificationUpdateWithoutEmailInput-input.js';
import { AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema as AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema } from './account-email-verification-unchecked-AccountEmailVerificationUncheckedUpdateWithoutEmailInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailVerificationCreateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountEmailVerificationUpsertWithoutEmailInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AccountEmailVerificationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AccountEmailVerificationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AccountEmailVerificationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema), z.lazy(() => AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema)]).optional()
}).strict();
export const AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateOneWithoutEmailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateOneWithoutEmailNestedInput>;
export const AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectZodSchema = makeSchema();
