import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordUpdateWithoutAccountInputObjectSchema as AccountPasswordUpdateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordUpdateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema as AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedUpdateWithoutAccountInput-input.js';
import { AccountPasswordCreateWithoutAccountInputObjectSchema as AccountPasswordCreateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema as AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedCreateWithoutAccountInput-input.js';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './account-password-AccountPasswordWhereInput-input.js'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema)]),
  where: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional()
}).strict();
export const AccountPasswordUpsertWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpsertWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUpsertWithoutAccountInput>;
export const AccountPasswordUpsertWithoutAccountInputObjectZodSchema = makeSchema();
