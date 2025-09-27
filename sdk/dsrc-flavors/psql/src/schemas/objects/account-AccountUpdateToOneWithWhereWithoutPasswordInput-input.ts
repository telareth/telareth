import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js';
import { AccountUpdateWithoutPasswordInputObjectSchema as AccountUpdateWithoutPasswordInputObjectSchema } from './account-AccountUpdateWithoutPasswordInput-input.js';
import { AccountUncheckedUpdateWithoutPasswordInputObjectSchema as AccountUncheckedUpdateWithoutPasswordInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutPasswordInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema)])
}).strict();
export const AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutPasswordInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutPasswordInput>;
export const AccountUpdateToOneWithWhereWithoutPasswordInputObjectZodSchema = makeSchema();
