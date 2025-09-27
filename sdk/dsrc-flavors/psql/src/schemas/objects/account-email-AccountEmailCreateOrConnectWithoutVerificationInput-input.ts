import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailCreateWithoutVerificationInputObjectSchema as AccountEmailCreateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema as AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutVerificationInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema)])
}).strict();
export const AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutVerificationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutVerificationInput>;
export const AccountEmailCreateOrConnectWithoutVerificationInputObjectZodSchema = makeSchema();
