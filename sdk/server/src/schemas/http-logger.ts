import crypto from 'crypto';
import type { IncomingMessage, ServerResponse } from 'http';

import type { HttpLogger, Options, ReqId } from 'pino-http';
import { z } from 'zod';

import { $LoggerOptionsSchema, LogLevelSchema } from './logger.js';

export type { HttpLogger, Options as HttpOptions };

/**
 * Extends IncomingMessage to include the `id` property injected by pino-http.
 */
export type TelarethRequest = IncomingMessage & { id?: ReqId };

const GenReqIdSchema = z.function({
  input: [z.custom<IncomingMessage>()],
  output: z.union([z.string(), z.number()]),
});

const CustomSuccessMessageArgsSchema = [
  z.custom<IncomingMessage>(),
  z.custom<ServerResponse>(),
  z.number(),
] as const;

const CustomErrorMessageArgsSchema = [
  z.custom<IncomingMessage>(),
  z.custom<ServerResponse>(),
  z.custom<Error>(),
] as const;

const CustomPropsArgsSchema = [
  z.custom<IncomingMessage>(),
  z.custom<ServerResponse>(),
] as const;

/**
 * Default configuration for the HTTP logger middleware.
 */
export const DEFAULT_HTTP_LOGGER_OPTIONS: Options = {
  /**
   * Generates or reuses a request ID.
   * @param req The Incoming HTTP request.
   */
  genReqId: (req: TelarethRequest): string =>
    req.headers['x-request-id']?.toString() ??
    req.headers['X-Request-Id']?.toString() ??
    crypto.randomUUID(),

  /**
   * Decides the log level based on response or error.
   * @param _req Incoming HTTP request.
   * @param res HTTP response.
   * @param err Optional error object.
   */
  customLogLevel: (_req: TelarethRequest, res: ServerResponse, err?: Error) =>
    res.statusCode >= 500 || err
      ? 'error'
      : res.statusCode >= 400
        ? 'warn'
        : 'info',

  /**
   * Builds the success message.
   * @param _req Incoming HTTP request.
   * @param res HTTP response.
   * @param responseTime The response time in milliseconds.
   */
  customSuccessMessage: (
    _req: TelarethRequest,
    res: ServerResponse,
    responseTime: number
  ): string =>
    `Request completed with status ${res.statusCode} in ${responseTime}ms`,

  /**
   * Builds the error message.
   * @param _req Incoming HTTP request.
   * @param res HTTP response.
   * @param err The error object.
   */
  customErrorMessage: (
    _req: TelarethRequest,
    res: ServerResponse,
    err: Error
  ): string =>
    `Request errored with status ${res.statusCode}: ${err?.message ?? 'unknown error'}`,

  /**
   * Builds the message for a received request.
   * @param req The Incoming HTTP request.
   */
  customReceivedMessage: (req: TelarethRequest): string =>
    `Request received: ${req.method} ${req.url}`,

  autoLogging: true,
  quietReqLogger: true,

  /**
   * Adds custom properties to the log.
   * @param req The Incoming HTTP request.
   * @param res The HTTP response.
   */
  customProps: (req: TelarethRequest, res: ServerResponse) => ({
    requestId: req.id,
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
  }),
};

/**
 * Zod schema for validating HttpLoggerOptions.
 */
export const $HttpLoggerOptionsSchema = z.looseObject({
  genReqId: GenReqIdSchema.optional(),
  customLogLevel: z
    .function({
      input: [
        z.custom<IncomingMessage>(),
        z.custom<ServerResponse>(),
        z.custom<Error>().optional(),
      ] as const,
      output: LogLevelSchema,
    })
    .optional(),
  customSuccessMessage: z
    .function({ input: CustomSuccessMessageArgsSchema, output: z.string() })
    .optional(),
  customErrorMessage: z
    .function({ input: CustomErrorMessageArgsSchema, output: z.string() })
    .optional(),
  customReceivedMessage: z
    .function({
      input: [z.custom<IncomingMessage>()] as const,
      output: z.string(),
    })
    .optional(),
  customReceivedObject: z
    .function({
      input: [z.custom<IncomingMessage>()] as const,
      output: z.record(z.string(), z.unknown()),
    })
    .optional(),
  customSuccessObject: z
    .function({
      input: CustomPropsArgsSchema,
      output: z.record(z.string(), z.unknown()),
    })
    .optional(),
  customErrorObject: z
    .function({
      input: CustomPropsArgsSchema,
      output: z.record(z.string(), z.unknown()),
    })
    .optional(),
  autoLogging: z.boolean().optional(),
  quietReqLogger: z.boolean().optional(),
  customProps: z
    .function({
      input: CustomPropsArgsSchema,
      output: z.record(z.string(), z.unknown()),
    })
    .optional(),
});

export const HttpLoggerOptionsSchema = z
  .union([z.boolean(), $LoggerOptionsSchema])
  .optional();

export type RawHttpLoggerOptions = z.input<typeof HttpLoggerOptionsSchema>;
export type ParsedHttpLoggerOptions = z.output<typeof HttpLoggerOptionsSchema>;
