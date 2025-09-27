import { z } from 'zod';

export const HealthScalarFieldEnum = z.enum(['id', 'status', 'lastChecked', 'metadata'])

export type HealthScalarFieldEnum = z.infer<typeof HealthScalarFieldEnum>;