import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  lastChecked: z.boolean().optional(),
  metadata: z.boolean().optional()
}).strict();
export const HealthSelectObjectSchema: z.ZodType<Prisma.HealthSelect> = makeSchema() as unknown as z.ZodType<Prisma.HealthSelect>;
export const HealthSelectObjectZodSchema = makeSchema();
