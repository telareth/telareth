import { z } from 'zod';

export const NullableJsonNullValueInput = z.enum(['DbNull', 'JsonNull'])

export type NullableJsonNullValueInput = z.infer<typeof NullableJsonNullValueInput>;