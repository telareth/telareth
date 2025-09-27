import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountUpdateWithoutPasswordInputObjectSchema as AccountUpdateWithoutPasswordInputObjectSchema } from './account-AccountUpdateWithoutPasswordInput-input.js';
import { AccountUncheckedUpdateWithoutPasswordInputObjectSchema as AccountUncheckedUpdateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutPasswordInput-input.js';
import { AccountCreateWithoutPasswordInputObjectSchema as AccountCreateWithoutPasswordInputObjectSchema } from './account-AccountCreateWithoutPasswordInput-input.js';
import { AccountUncheckedCreateWithoutPasswordInputObjectSchema as AccountUncheckedCreateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutPasswordInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema)]),
  where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountUpsertWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpsertWithoutPasswordInput>;
export const AccountUpsertWithoutPasswordInputObjectZodSchema = makeSchema();
