import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateWithoutPasswordInputObjectSchema as AccountCreateWithoutPasswordInputObjectSchema } from './account-AccountCreateWithoutPasswordInput-input.js';
import { AccountUncheckedCreateWithoutPasswordInputObjectSchema as AccountUncheckedCreateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutPasswordInput-input.js';
import { AccountCreateOrConnectWithoutPasswordInputObjectSchema as AccountCreateOrConnectWithoutPasswordInputObjectSchema } from './account-AccountCreateOrConnectWithoutPasswordInput-input.js';
import { AccountUpsertWithoutPasswordInputObjectSchema as AccountUpsertWithoutPasswordInputObjectSchema } from './account-AccountUpsertWithoutPasswordInput-input.js';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js';
import { AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema as AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema } from './account-AccountUpdateToOneWithWhereWithoutPasswordInput-input.js';
import { AccountUpdateWithoutPasswordInputObjectSchema as AccountUpdateWithoutPasswordInputObjectSchema } from './account-AccountUpdateWithoutPasswordInput-input.js';
import { AccountUncheckedUpdateWithoutPasswordInputObjectSchema as AccountUncheckedUpdateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutPasswordInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutPasswordInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema), z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateOneWithoutPasswordNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateOneWithoutPasswordNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateOneWithoutPasswordNestedInput>;
export const AccountUpdateOneWithoutPasswordNestedInputObjectZodSchema = makeSchema();
