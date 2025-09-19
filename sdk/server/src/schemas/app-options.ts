import { z } from 'zod';

import { PortSchema } from './port.js';

export const APP_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

export const AppOptionsSchema = z.object({
  name: z.string().regex(APP_NAME_REGEX),
  port: PortSchema,
});

export type AppOptions = z.infer<typeof AppOptionsSchema>;
export type RawAppOptions = z.input<typeof AppOptionsSchema>;
export type ParsedAppOptions = z.output<typeof AppOptionsSchema>;
