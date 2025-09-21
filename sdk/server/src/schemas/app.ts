import { z } from 'zod';

import { CorsOptionsSchema } from './cors.js';
import { HelmetOptionsSchema } from './helmet.js';
import { HttpLoggerOptionsSchema } from './http-logger.js';
import { LoggerOptionsSchema } from './logger.js';
import { NameSchema } from './name.js';
import { PortSchema } from './port.js';
import { RateLimitOptionsSchema } from './rate-limiter.js';

/**
 * Application options schema.
 */
export const $AppOptionsSchema = z.object({
  name: NameSchema,

  port: PortSchema,

  helmet: HelmetOptionsSchema,

  cors: CorsOptionsSchema,

  logger: LoggerOptionsSchema,

  httpLogger: HttpLoggerOptionsSchema,

  rateLimit: RateLimitOptionsSchema,
});

export const AppOptionsSchema = $AppOptionsSchema.optional();

export type AppOptions = z.infer<typeof $AppOptionsSchema>;
export type RawAppOptions = z.input<typeof AppOptionsSchema>;
export type ParsedAppOptions = z.output<typeof $AppOptionsSchema>;
