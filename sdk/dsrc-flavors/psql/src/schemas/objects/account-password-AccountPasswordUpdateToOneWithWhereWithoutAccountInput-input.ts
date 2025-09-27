import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountPasswordWhereInputObjectSchema as AccountPasswordWhereInputObjectSchema } from './account-password-AccountPasswordWhereInput-input.js';
import { AccountPasswordUpdateWithoutAccountInputObjectSchema as AccountPasswordUpdateWithoutAccountInputObjectSchema } from './account-password-AccountPasswordUpdateWithoutAccountInput-input.js';
import { AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema as AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema } from './account-password-unchecked-AccountPasswordUncheckedUpdateWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema), z.lazy(() => AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema)])
}).strict();
export const AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateToOneWithWhereWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateToOneWithWhereWithoutAccountInput>;
export const AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectZodSchema = makeSchema();
