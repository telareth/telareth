import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountCreateWithoutEmailsInputObjectSchema as AccountCreateWithoutEmailsInputObjectSchema } from './account-AccountCreateWithoutEmailsInput-input.js';
import { AccountUncheckedCreateWithoutEmailsInputObjectSchema as AccountUncheckedCreateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedCreateWithoutEmailsInput-input.js';
import { AccountCreateOrConnectWithoutEmailsInputObjectSchema as AccountCreateOrConnectWithoutEmailsInputObjectSchema } from './account-AccountCreateOrConnectWithoutEmailsInput-input.js';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './account-AccountWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmailsInputObjectSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountCreateNestedOneWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateNestedOneWithoutEmailsInput>;
export const AccountCreateNestedOneWithoutEmailsInputObjectZodSchema = makeSchema();
