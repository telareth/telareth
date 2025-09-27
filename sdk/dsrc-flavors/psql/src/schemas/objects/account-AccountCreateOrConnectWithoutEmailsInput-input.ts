import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js';
import { AccountCreateWithoutEmailsInputObjectSchema as AccountCreateWithoutEmailsInputObjectSchema } from './account-AccountCreateWithoutEmailsInput-input.js';
import { AccountUncheckedCreateWithoutEmailsInputObjectSchema as AccountUncheckedCreateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutEmailsInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutEmailsInput>;
export const AccountCreateOrConnectWithoutEmailsInputObjectZodSchema = makeSchema();
