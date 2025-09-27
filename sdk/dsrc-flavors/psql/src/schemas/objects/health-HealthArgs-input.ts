import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthSelectObjectSchema as HealthSelectObjectSchema } from './health-select-HealthSelect-input.js'

const makeSchema = () => z.object({
  select: z.lazy(() => HealthSelectObjectSchema).optional()
}).strict();
export const HealthArgsObjectSchema = makeSchema();
export const HealthArgsObjectZodSchema = makeSchema();
