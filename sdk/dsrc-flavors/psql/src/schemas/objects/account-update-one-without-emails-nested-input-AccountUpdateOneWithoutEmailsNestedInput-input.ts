import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateWithoutEmailsInputObjectSchema as AccountCreateWithoutEmailsInputObjectSchema } from './account-AccountCreateWithoutEmailsInput-input.js';
import { AccountUncheckedCreateWithoutEmailsInputObjectSchema as AccountUncheckedCreateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutEmailsInput-input.js';
import { AccountCreateOrConnectWithoutEmailsInputObjectSchema as AccountCreateOrConnectWithoutEmailsInputObjectSchema } from './account-AccountCreateOrConnectWithoutEmailsInput-input.js';
import { AccountUpsertWithoutEmailsInputObjectSchema as AccountUpsertWithoutEmailsInputObjectSchema } from './account-AccountUpsertWithoutEmailsInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js';
import { AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema as AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema } from './account-AccountUpdateToOneWithWhereWithoutEmailsInput-input.js';
import { AccountUpdateWithoutEmailsInputObjectSchema as AccountUpdateWithoutEmailsInputObjectSchema } from './account-AccountUpdateWithoutEmailsInput-input.js';
import { AccountUncheckedUpdateWithoutEmailsInputObjectSchema as AccountUncheckedUpdateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutEmailsInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmailsInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutEmailsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema), z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateOneWithoutEmailsNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateOneWithoutEmailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateOneWithoutEmailsNestedInput>;
export const AccountUpdateOneWithoutEmailsNestedInputObjectZodSchema = makeSchema();
