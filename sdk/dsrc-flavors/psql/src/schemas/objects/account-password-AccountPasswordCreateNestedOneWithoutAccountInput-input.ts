import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordCreateWithoutAccountInputObjectSchema as AccountPasswordCreateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema as AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedCreateWithoutAccountInput-input.js';
import { AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema as AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateOrConnectWithoutAccountInput-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './account-password-AccountPasswordWhereUniqueInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema).optional(),
  connect: z.lazy(() => AccountPasswordWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateNestedOneWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordCreateNestedOneWithoutAccountInput>;
export const AccountPasswordCreateNestedOneWithoutAccountInputObjectZodSchema = makeSchema();
