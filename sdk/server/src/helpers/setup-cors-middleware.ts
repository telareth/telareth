import type { Application } from 'express';

import type { RawCorsOptions } from '../schemas/cors.js';
import { cors, DEFAULT_CORS_OPTIONS } from '../schemas/cors.js';
import { parseCorsOptions } from './parse-cors-options.js';

/**
 * Configures the CORS middleware.
 * @param app The App instance.
 * @param options The raw/unsafe CORS middleware options.
 */
export function setupCorsMiddleware(
  app: Application,
  options?: RawCorsOptions
) {
  const corsOptions = parseCorsOptions(options);
  const defaultCorsOptions = parseCorsOptions(DEFAULT_CORS_OPTIONS);

  if (!defaultCorsOptions || defaultCorsOptions === true) {
    throw new Error(
      'DEFAULT_CORS_OPTIONS should be a valid CorsOptions object.'
    );
  }

  // Use default if undefined or true
  const appliedOptions =
    corsOptions === undefined || corsOptions === true
      ? defaultCorsOptions
      : corsOptions;

  if (appliedOptions) {
    app.use(cors(appliedOptions));
  }
}
