import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordCreateWithoutAccountInputObjectSchema as AccountPasswordCreateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema as AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedCreateWithoutAccountInput-input.js';
import { AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema as AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema } from './account-password-AccountPasswordCreateOrConnectWithoutAccountInput-input.js';
import { AccountPasswordUpsertWithoutAccountInputObjectSchema as AccountPasswordUpsertWithoutAccountInputObjectSchema } from './account-password-AccountPasswordUpsertWithoutAccountInput-input.js';
import { AccountPasswordWhereUniqueInputObjectSchema as AccountPasswordWhereUniqueInputObjectSchema } from './account-password-AccountPasswordWhereUniqueInput-input.js';
import { AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema as AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema } from './account-password-AccountPasswordUpdateToOneWithWhereWithoutAccountInput-input.js';
import { AccountPasswordUpdateWithoutAccountInputObjectSchema as AccountPasswordUpdateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordUpdateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema as AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedUpdateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountPasswordUpsertWithoutAccountInputObjectSchema).optional(),
  connect: z.lazy(() => AccountPasswordWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema)]).optional()
}).strict();
export const AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateOneRequiredWithoutAccountNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateOneRequiredWithoutAccountNestedInput>;
export const AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectZodSchema = makeSchema();
