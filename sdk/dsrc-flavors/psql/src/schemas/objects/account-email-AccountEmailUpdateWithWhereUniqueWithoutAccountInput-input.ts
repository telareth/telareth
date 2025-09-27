import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailWhereUniqueInputObjectSchema as AccountEmailWhereUniqueInputObjectSchema } from './account-email-AccountEmailWhereUniqueInput-input.js';
import { AccountEmailUpdateWithoutAccountInputObjectSchema as AccountEmailUpdateWithoutAccountInputObjectSchema } from './account-email-AccountEmailUpdateWithoutAccountInput-input.js';
import { AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema as AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema } from './account-email-unchecked-AccountEmailUncheckedUpdateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AccountEmailUpdateWithoutAccountInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema)])
}).strict();
export const AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateWithWhereUniqueWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpdateWithWhereUniqueWithoutAccountInput>;
export const AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectZodSchema = makeSchema();
