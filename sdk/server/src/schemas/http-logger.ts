import crypto from 'crypto';
import type { IncomingMessage, ServerResponse } from 'http';

import type { HttpLogger, Options, ReqId } from 'pino-http';
import pinoHttp from 'pino-http';
import { z } from 'zod';

import { LoggerOptionsSchema, LogLevelSchema } from './logger.js';

export { pinoHttp as httpLogger };
export type { HttpLogger };

/**
 * TelarethRequest extends IncomingMessage to include the `id` property
 * injected by pino-http. The type matches ReqId from pino-http
 * (string | number | object).
 */
export type TelarethRequest = IncomingMessage & { id?: ReqId };

const GenReqIdSchema = z.union([
  z.function({ output: z.string() }),
  z.function({ output: z.number() }),
  z.string(),
]);

const PinoLogFnSchema = z.function({
  input: z.tuple([]).rest(z.unknown()),
  output: z.void(),
});

const PinoLoggerSchema = z.object({
  fatal: PinoLogFnSchema,
  error: PinoLogFnSchema,
  warn: PinoLogFnSchema,
  info: PinoLogFnSchema,
  debug: PinoLogFnSchema,
  trace: PinoLogFnSchema,
  silent: PinoLogFnSchema,

  level: z.string(),
  levels: z.object({
    labels: z.record(z.string(), z.string()),
    values: z.record(z.string(), z.number()),
  }),
  isLevelEnabled: z.function({
    input: z.tuple([z.string()]),
    output: z.boolean(),
  }),
  version: z.string(),
  stdSerializers: z.object({
    req: z.function(),
    res: z.function(),
    err: z.function(),
  }),
  flush: z.function({ output: z.void() }),
  onChild: z.function({ output: z.void() }),
  child: z.function({
    input: z.tuple([z.record(z.string(), z.unknown())]),
    output: z.any(),
  }),
  bindings: z.function({
    input: z.tuple([]),
    output: z.record(z.string(), z.unknown()),
  }),
});

export const DEFAULT_HTTP_LOGGER_OPTIONS: HttpLoggerOptions = {
  /**
   * Generate or reuse a request ID.
   * @param req Incoming HTTP request with optional id.
   * @returns Unique request ID.
   */
  genReqId: (req: TelarethRequest): string =>
    req.headers['x-request-id']?.toString() ??
    req.headers['X-Request-Id']?.toString() ??
    crypto.randomUUID(),

  /**
   * Decide the log level based on response or error.
   * @param _req Incoming HTTP request (unused).
   * @param res HTTP response.
   * @param err Optional error object.
   * @returns Log level string.
   */
  customLogLevel: (_req: TelarethRequest, res: ServerResponse, err?: Error) =>
    res.statusCode >= 500 || err
      ? 'error'
      : res.statusCode >= 400
        ? 'warn'
        : 'info',

  /**
   * Build success message.
   * @param _req Incoming HTTP request (unused).
   * @param res HTTP response.
   * @returns Success log message.
   */
  customSuccessMessage: (_req: TelarethRequest, res: ServerResponse): string =>
    `Request completed with status ${res.statusCode}`,

  /**
   * Build error message.
   * @param _req Incoming HTTP request (unused).
   * @param res HTTP response.
   * @param err Error object.
   * @returns Error log message.
   */
  customErrorMessage: (
    _req: TelarethRequest,
    res: ServerResponse,
    err: Error
  ): string =>
    `Request errored with status ${res.statusCode}: ${err?.message ?? 'unknown error'}`,

  /**
   * Build message for received request.
   * @param req Incoming HTTP request.
   * @returns Received log message.
   */
  customReceivedMessage: (req: TelarethRequest): string =>
    `Request received: ${req.method} ${req.url}`,

  autoLogging: true,
  quietReqLogger: true,

  /**
   * Add custom properties to the log.
   * @param req Incoming HTTP request with optional id.
   * @param res HTTP response.
   * @returns Object containing additional log properties.
   */
  customProps: (req: TelarethRequest, res: ServerResponse) => ({
    requestId: req.id,
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
  }),
};

export const HttpLoggerOptionsSchema = z
  .looseObject({
    logger: PinoLoggerSchema.optional(),
    genReqId: GenReqIdSchema.optional(),
    customLogLevel: z.function({ output: LogLevelSchema }).optional(),
    customSuccessMessage: z.function({ output: z.string() }).optional(),
    customErrorMessage: z.function({ output: z.string() }).optional(),
    customReceivedMessage: z.function({ output: z.string() }).optional(),
    customReceivedObject: z
      .function({ output: z.record(z.string(), z.unknown()) })
      .optional(),
    customSuccessObject: z
      .function({ output: z.record(z.string(), z.unknown()) })
      .optional(),
    customErrorObject: z
      .function({ output: z.record(z.string(), z.unknown()) })
      .optional(),
    autoLogging: z.boolean().optional(),
    quietReqLogger: z.boolean().optional(),
    customProps: z
      .function({ output: z.record(z.string(), z.unknown()) })
      .optional(),
  })
  .optional()
  .transform((val) => val as Options);

export const PinoHttpOptionsSchema = z
  .union([z.boolean(), LoggerOptionsSchema, HttpLoggerOptionsSchema])
  .optional();

export type HttpLoggerOptions = z.infer<typeof HttpLoggerOptionsSchema>;
export type RawHttpLoggerOptions = z.input<typeof HttpLoggerOptionsSchema>;
export type ParsedHttpLoggerOptions = z.output<typeof HttpLoggerOptionsSchema>;
