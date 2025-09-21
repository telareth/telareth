import { z } from 'zod';

import {
  APP_NAME_REGEX,
  AppOptionsSchema,
  DEFAULT_CORS_OPTIONS,
  DEFAULT_RATE_LIMIT_OPTIONS,
  INFO_LOGGER_OPTIONS,
  PortSchema,
} from '@telareth/server/schemas';

export const GatewayOptionsSchema = AppOptionsSchema.extend({
  name: z.string().regex(APP_NAME_REGEX).default('gateway'),
  port: PortSchema.default(4000),
  helmet: AppOptionsSchema.shape.helmet.default(undefined), // disable by default
  cors: AppOptionsSchema.shape.cors.default(DEFAULT_CORS_OPTIONS),
  logger: AppOptionsSchema.shape.logger.default(INFO_LOGGER_OPTIONS),
  httpLogger: AppOptionsSchema.shape.httpLogger.default(false), // disable by default
  rateLimit: AppOptionsSchema.shape.rateLimit.default(
    DEFAULT_RATE_LIMIT_OPTIONS
  ),
});

export type GatewayOptions = z.infer<typeof GatewayOptionsSchema>;
export type RawGatewayOptions = z.input<typeof GatewayOptionsSchema>;
export type ParsedGatewayOptions = z.output<typeof GatewayOptionsSchema>;
