import pino from 'pino';

import type {
  Logger,
  LoggerOptions,
  RawLoggerOptions,
} from '../schemas/logger.js';
import {
  INFO_LOGGER_OPTIONS,
  SILENT_LOGGER_OPTIONS,
} from '../schemas/logger.js';
import { parseLoggerOptions } from './parse-logger-options.js';

/**
 * Configures the Logger.
 * @param options The raw/unsafe Logger options.
 */
export function setupLogger(options?: RawLoggerOptions): Logger {
  const loggerOptions = parseLoggerOptions(options);

  if (loggerOptions) {
    if (loggerOptions === true) {
      return pino(INFO_LOGGER_OPTIONS);
    } else {
      return pino(loggerOptions as LoggerOptions);
    }
  }

  return pino(SILENT_LOGGER_OPTIONS);
}
