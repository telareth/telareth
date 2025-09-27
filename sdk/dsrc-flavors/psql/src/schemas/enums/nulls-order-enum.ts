import { z } from 'zod';

export const NullsOrder = z.enum(['first', 'last'])

export type NullsOrder = z.infer<typeof NullsOrder>;