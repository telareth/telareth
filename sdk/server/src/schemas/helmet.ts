import type { HelmetOptions as Options } from 'helmet';
import { z } from 'zod';

export const HelmetOptionsSchema = z.custom<Options>().optional();

export type HelmetOptions = z.infer<typeof HelmetOptionsSchema>;
export type RawHelmetOptions = z.input<typeof HelmetOptionsSchema>;
export type ParsedHelmetOptions = z.output<typeof HelmetOptionsSchema>;
