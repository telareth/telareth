import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { AccountEmailScalarWhereInputObjectSchema as AccountEmailScalarWhereInputObjectSchema } from './account-email-scalar-AccountEmailScalarWhereInput-input.js';
import { AccountEmailUpdateManyMutationInputObjectSchema as AccountEmailUpdateManyMutationInputObjectSchema } from './account-email-AccountEmailUpdateManyMutationInput-input.js';
import { AccountEmailUncheckedUpdateManyWithoutAccountInputObjectSchema as AccountEmailUncheckedUpdateManyWithoutAccountInputObjectSchema } from './account-email-AccountEmailUncheckedUpdateManyWithoutAccountInput-input.js'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AccountEmailUpdateManyMutationInputObjectSchema), z.lazy(() => AccountEmailUncheckedUpdateManyWithoutAccountInputObjectSchema)])
}).strict();
export const AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateManyWithWhereWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyWithWhereWithoutAccountInput>;
export const AccountEmailUpdateManyWithWhereWithoutAccountInputObjectZodSchema = makeSchema();
