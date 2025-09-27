import { z } from 'zod';

export const HealthStatus = z.enum(['OK', 'WARN', 'ERROR'])

export type HealthStatus = z.infer<typeof HealthStatus>;