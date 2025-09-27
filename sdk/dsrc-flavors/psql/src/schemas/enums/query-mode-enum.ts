import { z } from 'zod';

export const QueryMode = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryMode>;