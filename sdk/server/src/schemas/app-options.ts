import { z } from 'zod';

import { CorsSchema } from './cors.js';
import { HelmetSchema } from './helmet.js';
import {
  DEFAULT_HTTP_LOGGER_OPTIONS,
  HttpLoggerOptionsSchema,
} from './http-logger.js';
import { LoggerOptionsSchema, LogLevelSchema } from './logger.js';
import { PortSchema } from './port.js';

export const APP_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

export const AppOptionsSchema = z.object({
  name: z.string().regex(APP_NAME_REGEX),
  port: PortSchema,
  helmet: HelmetSchema,
  cors: CorsSchema,
  logger: z
    .union([z.boolean(), LoggerOptionsSchema])
    .optional()
    .default(true)
    .transform((val) =>
      typeof val === 'boolean'
        ? { level: val ? LogLevelSchema.enum.info : LogLevelSchema.enum.silent }
        : val
    ),
  httpLogger: z
    .union([z.boolean(), HttpLoggerOptionsSchema])
    .optional()
    .default(false)
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? DEFAULT_HTTP_LOGGER_OPTIONS
          : undefined
        : val
    ),
});

export type AppOptions = z.infer<typeof AppOptionsSchema>;
export type RawAppOptions = z.input<typeof AppOptionsSchema>;
export type ParsedAppOptions = z.output<typeof AppOptionsSchema>;
