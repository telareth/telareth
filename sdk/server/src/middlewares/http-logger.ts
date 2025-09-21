import type { Application } from 'express';

import type { ParsedAppOptions } from '../schemas/app.js';
import type { HttpLogger, HttpLoggerOptions } from '../schemas/http-logger.js';
import { httpLogger } from '../schemas/http-logger.js';
import type { LoggerOptions } from '../schemas/logger.js';
import { logger as pino } from '../schemas/logger.js';

// A type alias for the callable httpLogger function to be used in the cast.
type PinoHttpCallable = (options?: HttpLoggerOptions) => HttpLogger;

/**
 * Configures and sets up the HTTP logger middleware.
 * @param app The app instance.
 * @param options The parsed app options.
 */
export function setupHttpLoggerMiddleware(
  app: Application,
  options: ParsedAppOptions
) {
  if (options.httpLogger === false) {
    return;
  }

  // Use a double-cast to explicitly tell TypeScript that `httpLogger` is a callable function.
  const callableHttpLogger = httpLogger as unknown as PinoHttpCallable;

  let middleware;
  const httpLoggerOptions = options.httpLogger as
    | HttpLoggerOptions
    | LoggerOptions;

  if (!httpLoggerOptions) {
    middleware = callableHttpLogger();
  } else if ('level' in httpLoggerOptions) {
    const loggerInstance = pino(httpLoggerOptions as LoggerOptions);
    middleware = callableHttpLogger({ logger: loggerInstance });
  } else {
    middleware = callableHttpLogger(httpLoggerOptions as HttpLoggerOptions);
  }

  app.use(middleware);
}
