import type { Application } from 'express';

import type { RawHttpLoggerOptions } from '../schemas/http-logger.js';
import { parseHttpLoggerOptions } from './parse-http-logger-options.js';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const httpLogger = require('pino-http')();

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
    app.use(httpLogger(httpLoggerOptions)); // user options
  }
}
