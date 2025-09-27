import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateWithoutPasswordInputObjectSchema as AccountCreateWithoutPasswordInputObjectSchema } from './account-AccountCreateWithoutPasswordInput-input.js';
import { AccountUncheckedCreateWithoutPasswordInputObjectSchema as AccountUncheckedCreateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutPasswordInput-input.js';
import { AccountCreateOrConnectWithoutPasswordInputObjectSchema as AccountCreateOrConnectWithoutPasswordInputObjectSchema } from './account-AccountCreateOrConnectWithoutPasswordInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountCreateNestedOneWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateNestedOneWithoutPasswordInput>;
export const AccountCreateNestedOneWithoutPasswordInputObjectZodSchema = makeSchema();
