import type { Application } from 'express';
import { pinoHttp } from 'pino-http';

import type {
  HttpLogger,
  RawHttpLoggerOptions,
} from '../schemas/http-logger.js';
import { parseHttpLoggerOptions } from './parse-http-logger-options.js';

const httpLogger = pinoHttp;

/**
 * Configues the Http-Logger.
 * @param app The App instance.
 * @param options The raw/unsafe HTTP-Logger middleware options.
 */
export function setupHttpLoggerMiddleware(
  app: Application,
  options?: RawHttpLoggerOptions
) {
  const httpLoggerOptions = parseHttpLoggerOptions(options);

  if (httpLoggerOptions === undefined || httpLoggerOptions === true) {
    app.use(httpLogger()); // default
  } else if (httpLoggerOptions) {
    app.use(httpLogger(httpLoggerOptions as unknown as HttpLogger)); // user options
  }
}
