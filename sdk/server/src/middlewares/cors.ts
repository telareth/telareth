import type { Application } from 'express';
import type { ParsedAppOptions } from 'src/schemas/app.js';
import { cors } from 'src/schemas/cors.js';

/**
 * Configure and sets up the CORS middleware.
 * @param app The app instance.
 * @param options The parsed app options.
 */
export function setupCorsMiddleware(
  app: Application,
  options: ParsedAppOptions
) {
  if (options.cors) {
    const middleware = cors(options.cors);

    app.use(middleware);
  }
}
