import type { Application } from 'express';
import type { HelmetOptions } from 'helmet';

import type { ParsedAppOptions } from '../schemas/app.js';
import { helmet } from '../schemas/helmet.js';

/**
 * Configures and sets up the Helmet middleware.
 * @param app The app instance.
 * @param options The parsed app options.
 */
export function setupHelmetMiddleware(
  app: Application,
  options: ParsedAppOptions
) {
  // If options.helmet is not false, we proceed to set up the middleware
  if (options.helmet !== false) {
    let middleware: ReturnType<typeof helmet>;

    // If options.helmet is undefined (the default value), use the default helmet options
    if (options.helmet === undefined) {
      middleware = helmet();
    } else {
      // Otherwise, pass the provided options object
      middleware = helmet(options.helmet as HelmetOptions);
    }

    app.use(middleware);
  }
}
