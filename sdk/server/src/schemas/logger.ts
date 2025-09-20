import type { Logger as Pino, LoggerOptions as PinoLoggerOptions } from 'pino';
import pino from 'pino';
import { z } from 'zod';

export const logger = pino();

export const LOG_LEVEL = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'silent',
] as const;

export const LogLevelSchema = z.enum(LOG_LEVEL);

export const LoggerOptionsSchema = z
  .looseObject({
    level: LogLevelSchema.default(LogLevelSchema.enum.info),
  })
  .optional()
  .default({
    level: LogLevelSchema.enum.info,
  })
  .transform((val) => val as PinoLoggerOptions);

export type Logger = Pino;
export type LogLevel = z.infer<typeof LogLevelSchema>;
export type LoggerOptions = z.infer<typeof LoggerOptionsSchema>;
export type RawLoggerOptions = z.input<typeof LoggerOptionsSchema>;
export type ParsedLoggerOptions = z.output<typeof LoggerOptionsSchema>;
