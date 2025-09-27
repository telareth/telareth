import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailCreateWithoutAccountInputObjectSchema as AccountEmailCreateWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateWithoutAccountInput-input.js';
import { AccountEmailUncheckedCreateWithoutAccountInputObjectSchema as AccountEmailUncheckedCreateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema)])
}).strict();
export const AccountEmailCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutAccountInput>;
export const AccountEmailCreateOrConnectWithoutAccountInputObjectZodSchema = makeSchema();
