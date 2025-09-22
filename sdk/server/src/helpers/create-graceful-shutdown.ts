import type { Server } from 'http';

import type { Logger } from '../schemas/logger.js';

/**
 * Creates a robust shutdown handler.
 *
 * Handles server closure, optional cleanup of resources, and process exit.
 * @param logger App logger instance.
 * @param server Node.js HTTP server instance (nullable if not started yet).
 * @param cleanup Optional async cleanup function (DB connections, cache, etc).
 * @param timeoutMs Maximum time to wait for server close before forcing exit (default 10s).
 * @returns Shutdown function accepting a signal name.
 */
export function createGracefulShutdown(
  logger: Logger,
  server: Server | null,
  cleanup?: () => Promise<void>,
  timeoutMs = 10_000
) {
  let isShuttingDown = false;

  return async function shutdown(signal: string) {
    if (isShuttingDown) {
      logger.warn(`Shutdown already in progress, ignoring signal ${signal}`);
      return;
    }

    isShuttingDown = true;
    logger.info(`Caught ${signal}, shutting down gracefully...`);

    try {
      // Close the HTTP server
      if (server) {
        await new Promise<void>((resolve, reject) => {
          const timer = setTimeout(
            () => reject(new Error('Server close timeout')),
            timeoutMs
          );

          server.close((err) => {
            clearTimeout(timer);
            if (err) reject(err);
            else resolve();
          });
        });
      }

      // Run optional cleanup (DB connections, cache, etc)
      if (cleanup) {
        await cleanup();
      }

      logger.info('Gateway stopped.');
      process.exit(0);
    } catch (err) {
      logger.error({ err }, 'Error during shutdown');
      process.exit(1);
    }
  };
}
