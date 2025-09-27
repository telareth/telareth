import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailCreateWithoutAccountInputObjectSchema as AccountEmailCreateWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateWithoutAccountInput-input.js';
import { AccountEmailUncheckedCreateWithoutAccountInputObjectSchema as AccountEmailUncheckedCreateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutAccountInput-input.js';
import { AccountEmailCreateOrConnectWithoutAccountInputObjectSchema as AccountEmailCreateOrConnectWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateOrConnectWithoutAccountInput-input.js';
import { AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema as AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './account-email-AccountEmailUpsertWithWhereUniqueWithoutAccountInput-input.js';
import { AccountEmailCreateManyAccountInputEnvelopeObjectSchema as AccountEmailCreateManyAccountInputEnvelopeObjectSchema } from './account-AccountEmailCreateManyAccountInputEnvelope-input.js';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema as AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './account-email-AccountEmailUpdateWithWhereUniqueWithoutAccountInput-input.js';
import { AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema as AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema } from './account-email-AccountEmailUpdateManyWithWhereWithoutAccountInput-input.js';
import { AccountEmailScalarWhereInputObjectSchema as AccountEmailScalarWhereInputObjectSchema } from './account-email-scalar-AccountEmailScalarWhereInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema).array(), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountEmailWhereUniqueInputObjectSchema), z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountEmailWhereUniqueInputObjectSchema), z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountEmailWhereUniqueInputObjectSchema), z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountEmailWhereUniqueInputObjectSchema), z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountEmailScalarWhereInputObjectSchema), z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountNestedInput>;
export const AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectZodSchema = makeSchema();
