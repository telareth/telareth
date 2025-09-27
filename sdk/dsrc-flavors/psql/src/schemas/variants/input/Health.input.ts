import { z } from 'zod';

import { HealthStatus as HealthStatusSchema } from '../../enums/health-status-enum.js';
// prettier-ignore
export const HealthInputSchema = z.object({
    id: z.number().int(),
    status: HealthStatusSchema,
    lastChecked: z.date(),
    metadata: z.unknown().optional().nullable()
}).strict();

export type HealthInputType = z.infer<typeof HealthInputSchema>;
