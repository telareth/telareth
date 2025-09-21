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
      'DEFAULT_CORS_OPTIONS should bed a valid CorsOptions object.'
    );
  }

  if (corsOptions === undefined) {
    app.use(cors(defaultCorsOptions));
  } else {
    if (corsOptions) {
      if (corsOptions === true) {
        app.use(cors(defaultCorsOptions));
      } else {
        app.use(cors(corsOptions));
      }
    }
  }
}
