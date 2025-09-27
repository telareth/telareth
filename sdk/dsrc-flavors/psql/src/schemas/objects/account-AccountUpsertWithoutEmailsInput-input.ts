import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountUpdateWithoutEmailsInputObjectSchema as AccountUpdateWithoutEmailsInputObjectSchema } from './account-AccountUpdateWithoutEmailsInput-input.js';
import { AccountUncheckedUpdateWithoutEmailsInputObjectSchema as AccountUncheckedUpdateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutEmailsInput-input.js';
import { AccountCreateWithoutEmailsInputObjectSchema as AccountCreateWithoutEmailsInputObjectSchema } from './account-AccountCreateWithoutEmailsInput-input.js';
import { AccountUncheckedCreateWithoutEmailsInputObjectSchema as AccountUncheckedCreateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutEmailsInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema)]),
  where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountUpsertWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpsertWithoutEmailsInput>;
export const AccountUpsertWithoutEmailsInputObjectZodSchema = makeSchema();
