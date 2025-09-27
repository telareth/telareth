import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './account-AccountWhereInput-input.js';
import { AccountUpdateWithoutEmailsInputObjectSchema as AccountUpdateWithoutEmailsInputObjectSchema } from './account-AccountUpdateWithoutEmailsInput-input.js';
import { AccountUncheckedUpdateWithoutEmailsInputObjectSchema as AccountUncheckedUpdateWithoutEmailsInputObjectSchema } from './account-unchecked-AccountUncheckedUpdateWithoutEmailsInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema)])
}).strict();
export const AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmailsInput>;
export const AccountUpdateToOneWithWhereWithoutEmailsInputObjectZodSchema = makeSchema();
