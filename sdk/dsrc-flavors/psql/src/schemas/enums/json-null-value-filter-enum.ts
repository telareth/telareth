import { z } from 'zod';

export const JsonNullValueFilter = z.enum(['DbNull', 'JsonNull', 'AnyNull'])

export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilter>;