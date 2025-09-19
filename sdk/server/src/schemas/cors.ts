import type { CorsOptions } from 'cors';
import { z } from 'zod';

export const CorsSchema = z.custom<CorsOptions>().optional();

export type Cors = z.infer<typeof CorsSchema>;
export type RawCors = z.input<typeof CorsSchema>;
export type ParsedCors = z.output<typeof CorsSchema>;
