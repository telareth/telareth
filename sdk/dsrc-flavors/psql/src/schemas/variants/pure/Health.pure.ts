import { z } from 'zod';

import { HealthStatus as HealthStatusSchema } from '../../enums/health-status-enum.js';
// prettier-ignore
export const HealthModelSchema = z.object({
    id: z.number().int(),
    status: HealthStatusSchema,
    lastChecked: z.date(),
    metadata: z.unknown().nullable()
}).strict();

export type HealthModelType = z.infer<typeof HealthModelSchema>;
