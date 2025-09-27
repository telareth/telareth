import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateWithoutAccountInputObjectSchema as AccountEmailCreateWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateWithoutAccountInput-input.js';
import { AccountEmailUncheckedCreateWithoutAccountInputObjectSchema as AccountEmailUncheckedCreateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutAccountInput-input.js';
import { AccountEmailCreateOrConnectWithoutAccountInputObjectSchema as AccountEmailCreateOrConnectWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateOrConnectWithoutAccountInput-input.js';
import { AccountEmailCreateManyAccountInputEnvelopeObjectSchema as AccountEmailCreateManyAccountInputEnvelopeObjectSchema } from './account-AccountEmailCreateManyAccountInputEnvelope-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema).array(), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AccountEmailWhereUniqueInputObjectSchema), z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateNestedManyWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateNestedManyWithoutAccountInput>;
export const AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectZodSchema = makeSchema();
