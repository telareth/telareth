import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js';
import { AccountCreateWithoutPasswordInputObjectSchema as AccountCreateWithoutPasswordInputObjectSchema } from './account-AccountCreateWithoutPasswordInput-input.js';
import { AccountUncheckedCreateWithoutPasswordInputObjectSchema as AccountUncheckedCreateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutPasswordInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutPasswordInput>;
export const AccountCreateOrConnectWithoutPasswordInputObjectZodSchema = makeSchema();
