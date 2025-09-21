import { z } from 'zod';

import type { RawCorsOptions } from './cors.js';
import { CorsOptionsSchema, DEFAULT_CORS_OPTIONS } from './cors.js';
import type { RawHelmetOptions } from './helmet.js';
import { HelmetOptionsSchema } from './helmet.js';
import type { RawHttpLoggerOptions } from './http-logger.js';
import { HttpLoggerOptionsSchema } from './http-logger.js';
import type { LoggerOptions } from './logger.js';
import {
  INFO_LOGGER_OPTIONS,
  LoggerOptionsSchema,
  SILENT_LOGGER_OPTIONS,
} from './logger.js';
import { PortSchema } from './port.js';
import type { RawRateLimitOptions } from './rate-limiter.js';
import {
  DEFAULT_RATE_LIMIT_OPTIONS,
  RateLimitOptionsSchema,
} from './rate-limiter.js';

export const APP_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

/**
 * Application options schema.
 */
export const AppOptionsSchema = z.object({
  name: z.string().regex(APP_NAME_REGEX),

  port: PortSchema,

  helmet: z
    .union([z.boolean(), HelmetOptionsSchema])
    .optional()
    .default(true) // valid input default: enable helmet
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? undefined // `true` → enabled with default settings
          : false // `false` → explicitly disabled
        : (val as RawHelmetOptions)
    ),

  cors: z
    .union([z.boolean(), CorsOptionsSchema])
    .optional()
    .default(true) // valid input default
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? DEFAULT_CORS_OPTIONS // `true` → use default CORS options
          : false // `false` → disabled
        : (val as RawCorsOptions)
    ),

  logger: z
    .union([z.boolean(), LoggerOptionsSchema])
    .optional()
    .default(true)
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? INFO_LOGGER_OPTIONS // `true` → info-level logger
          : SILENT_LOGGER_OPTIONS // `false` → silent logger
        : (val as LoggerOptions)
    ),

  httpLogger: z
    .union([z.boolean(), HttpLoggerOptionsSchema, LoggerOptionsSchema])
    .optional()
    .default(true) // valid input default
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? undefined // `true` → enabled with default settings
          : false // `false` → explicitly disabled
        : (val as RawHttpLoggerOptions | LoggerOptions)
    ),

  rateLimit: z
    .union([z.boolean(), RateLimitOptionsSchema])
    .optional()
    .default(false) // valid input default: disabled
    .transform((val) =>
      typeof val === 'boolean'
        ? val
          ? DEFAULT_RATE_LIMIT_OPTIONS // `true` → use default RL options
          : false // `false` → disabled
        : (val as RawRateLimitOptions)
    ),
});

export type AppOptions = z.infer<typeof AppOptionsSchema>;
export type RawAppOptions = z.input<typeof AppOptionsSchema>;
export type ParsedAppOptions = z.output<typeof AppOptionsSchema>;
