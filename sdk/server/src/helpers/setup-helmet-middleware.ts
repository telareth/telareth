import type { Application } from 'express';

import type { RawHelmetOptions } from '../schemas/helmet.js';
import { helmet } from '../schemas/helmet.js';
import { parseHelmetOptions } from './parse-helmet-options.js';

/**
 * Configures the Helmet middleware.
 * @param app The App instance.
 * @param options The raw/unsage Helmet middleware options.
 */
export function setupHelmetMiddleware(
  app: Application,
  options?: RawHelmetOptions
) {
  const helmetOptions = parseHelmetOptions(options);

  // Convert false to undefined for helmet()
  const appliedOptions =
    helmetOptions === undefined ||
    helmetOptions === true ||
    helmetOptions === false
      ? undefined
      : helmetOptions;

  app.use(helmet(appliedOptions));
}
