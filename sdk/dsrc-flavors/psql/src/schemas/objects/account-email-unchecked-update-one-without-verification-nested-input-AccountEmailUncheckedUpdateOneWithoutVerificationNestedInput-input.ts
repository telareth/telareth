import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateWithoutVerificationInputObjectSchema as AccountEmailCreateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema as AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutVerificationInput-input.js';
import { AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema as AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema } from './account-email-AccountEmailCreateOrConnectWithoutVerificationInput-input.js';
import { AccountEmailUpsertWithoutVerificationInputObjectSchema as AccountEmailUpsertWithoutVerificationInputObjectSchema } from './account-email-AccountEmailUpsertWithoutVerificationInput-input.js';
import { AccountEmailWhereInputObjectSchema as AccountEmailWhereInputObjectSchema } from './account-email-AccountEmailWhereInput-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema as AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema } from './account-email-AccountEmailUpdateToOneWithWhereWithoutVerificationInput-input.js';
import { AccountEmailUpdateWithoutVerificationInputObjectSchema as AccountEmailUpdateWithoutVerificationInputObjectSchema } from './account-email-AccountEmailUpdateWithoutVerificationInput-input.js';
import { AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema as AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedUpdateWithoutVerificationInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountEmailUpsertWithoutVerificationInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AccountEmailWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AccountEmailWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUpdateWithoutVerificationInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema)]).optional()
}).strict();
export const AccountEmailUncheckedUpdateOneWithoutVerificationNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput>;
export const AccountEmailUncheckedUpdateOneWithoutVerificationNestedInputObjectZodSchema = makeSchema();
