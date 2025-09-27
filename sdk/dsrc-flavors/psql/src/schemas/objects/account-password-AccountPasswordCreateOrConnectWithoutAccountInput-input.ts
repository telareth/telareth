import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './account-password-AccountPasswordWhereUniqueInput-input.js';
import { AccountPasswordCreateWithoutAccountInputObjectSchema as AccountPasswordCreateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema as AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedCreateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountPasswordWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema)])
}).strict();
export const AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateOrConnectWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordCreateOrConnectWithoutAccountInput>;
export const AccountPasswordCreateOrConnectWithoutAccountInputObjectZodSchema = makeSchema();
