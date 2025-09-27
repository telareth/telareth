import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailUpdateWithoutAccountInputObjectSchema as AccountEmailUpdateWithoutAccountInputObjectSchema } from './account-email-AccountEmailUpdateWithoutAccountInput-input.js';
import { AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema as AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedUpdateWithoutAccountInput-input.js';
import { AccountEmailCreateWithoutAccountInputObjectSchema as AccountEmailCreateWithoutAccountInputObjectSchema } from './account-email-AccountEmailCreateWithoutAccountInput-input.js';
import { AccountEmailUncheckedCreateWithoutAccountInputObjectSchema as AccountEmailUncheckedCreateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedCreateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AccountEmailUpdateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema)])
}).strict();
export const AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpsertWithWhereUniqueWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpsertWithWhereUniqueWithoutAccountInput>;
export const AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectZodSchema = makeSchema();
