import { z } from 'zod';
import type { Prisma } from '../../dsrc/client';
import { HealthStatus as HealthStatusSchema } from '../enums/health-status-enum.js'

const nestedenumhealthstatusfilterSchema = z.object({
  equals: HealthStatus.optional(),
  in: HealthStatus.array().optional(),
  notIn: HealthStatus.array().optional(),
  not: z.union([HealthStatus, z.lazy(() => NestedEnumHealthStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumHealthStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumHealthStatusFilter> = nestedenumhealthstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumHealthStatusFilter>;
export const NestedEnumHealthStatusFilterObjectZodSchema = nestedenumhealthstatusfilterSchema;
