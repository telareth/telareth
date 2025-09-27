import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateWithoutVerificationInputObjectSchema as AccountEmailCreateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema as AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutVerificationInput-input.js';
import { AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema as AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateOrConnectWithoutVerificationInput-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema).optional(),
  connect: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateNestedOneWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateNestedOneWithoutVerificationInput>;
export const AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectZodSchema = makeSchema();
