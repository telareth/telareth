import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  emails: z.boolean().optional()
}).strict();
export const AccountCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AccountCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountCountOutputTypeSelect>;
export const AccountCountOutputTypeSelectObjectZodSchema = makeSchema();
