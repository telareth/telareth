import crypto from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';

import type { Options as HttpOptions, ReqId } from 'pino-http';
import { z } from 'zod';

import { $LoggerOptionsSchema, LogLevelSchema } from './logger.js';

export type { HttpLogger, Options as HttpOptions } from 'pino-http';

/**
 * Extends IncomingMessage to include the `id` property injected by pino-http.
 */
export type TelarethRequest = IncomingMessage & { id?: ReqId };

// Generate request ID schema
const GenReqIdSchema = z.function({
  input: [z.custom<IncomingMessage>()],
  output: z.union([z.string(), z.number()]),
});

// Zod tuples for function inputs
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

// Predefined log levels
export const LOG_LEVEL = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'silent',
] as const;
export type LogLevel = (typeof LOG_LEVEL)[number];

// Default configuration for HTTP logger
export const DEFAULT_HTTP_LOGGER_OPTIONS: HttpOptions = {
  /**
   * Generates or reuses a request ID.
   * @param req The incoming HTTP request.
   * @returns A string or numeric request ID.
   */
  genReqId: (req: TelarethRequest): string =>
    req.headers['x-request-id']?.toString() ??
    req.headers['X-Request-Id']?.toString() ??
    crypto.randomUUID(),

  /**
   * Determines the log level based on response status or presence of error.
   * @param _req The incoming HTTP request.
   * @param res The HTTP response object.
   * @param err Optional error object if an error occurred.
   * @returns The log level string.
   */
  customLogLevel: (
    _req: TelarethRequest,
    res: ServerResponse,
    err?: Error
  ): LogLevel => {
    if (res.statusCode >= 500 || err) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },

  /**
   * Builds the success message for completed requests.
   * @param _req The incoming HTTP request.
   * @param res The HTTP response object.
   * @param responseTime Time taken to process the request in milliseconds.
   * @returns A formatted success message string.
   */
  customSuccessMessage: (
    _req: TelarethRequest,
    res: ServerResponse,
    responseTime: number
  ): string =>
    `Request completed with status ${res.statusCode} in ${responseTime}ms`,

  /**
   * Builds the error message for failed requests.
   * @param _req The incoming HTTP request.
   * @param res The HTTP response object.
   * @param err The error object.
   * @returns A formatted error message string.
   */
  customErrorMessage: (
    _req: TelarethRequest,
    res: ServerResponse,
    err: Error
  ): string =>
    `Request errored with status ${res.statusCode}: ${err?.message ?? 'unknown error'}`,

  /**
   * Builds a message for a newly received request.
   * @param req The incoming HTTP request.
   * @returns A formatted received message string.
   */
  customReceivedMessage: (req: TelarethRequest): string =>
    `Request received: ${req.method} ${req.url}`,

  autoLogging: true,
  quietReqLogger: true,

  /**
   * Adds custom properties to the log entry.
   * @param req The incoming HTTP request.
   * @param res The HTTP response object.
   * @returns A record of custom log properties.
   */
  customProps: (req: TelarethRequest, res: ServerResponse) => ({
    requestId: req.id,
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
  }),
};

// Zod schema for HTTP logger options
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
