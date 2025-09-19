import { z } from 'zod';

import { CorsSchema } from './cors.js';
import { HelmetOptionsSchema } from './helmet.js';
import { LoggerSchema } from './logger.js';
import { PortSchema } from './port.js';

export const APP_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

export const AppOptionsSchema = z.object({
  name: z.string().regex(APP_NAME_REGEX),
  port: PortSchema,
  helmet: HelmetOptionsSchema,
  cors: CorsSchema,
  logger: LoggerSchema,
});

export type AppOptions = z.infer<typeof AppOptionsSchema>;
export type RawAppOptions = z.input<typeof AppOptionsSchema>;
export type ParsedAppOptions = z.output<typeof AppOptionsSchema>;
