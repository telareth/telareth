import type { Server } from 'http';

import type { Logger } from '../schemas/logger.js';

/**
 * Creates a shutdown handler for gracefully stopping the HTTP server.
 * @param logger The App logger instance.
 * @param server Node.js HTTP server instance to close. Can be `null` if not started yet.
 * @returns A shutdown function that accepts a signal name and gracefully stops the server.
 */
export function createGracefulShutdown(logger: Logger, server: Server | null) {
  return async function shutdown(signal: string) {
    logger.info(`Caught ${signal}, shutting down gracefully...`);

    try {
      if (server) {
        await new Promise<void>((resolve, reject) => {
          server.close((err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      }

      // TODO: clean up (close DB connection, ...)

      logger.info('Gateway stopped.');
      process.exit(0);
    } catch (err) {
      logger.error({ err }, 'Error during shutdown');
      process.exit(1);
    }
  };
}
