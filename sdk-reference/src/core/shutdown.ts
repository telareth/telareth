import type { Server } from 'http';

import { disconnectDB } from '../db/client.js';

/**
 * Creates a shutdown handler for gracefully stopping the HTTP server.
 * @param server Node.js HTTP server instance to close. Can be `null` if not started yet.
 * @returns A shutdown function that accepts a signal name and gracefully stops the server.
 */
export function createShutdownHandler(server: Server | null) {
  return async function shutdown(signal: string) {
    console.log(`[INFO] Caught ${signal}, shutting down gracefully...`);

    try {
      // Stop accepting new connections
      if (server) {
        await new Promise<void>((resolve, reject) => {
          server.close((err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      }

      await disconnectDB();

      // TODO: Cleanup resources, etc.
      console.log('[INFO] Gateway stopped gracefully');
      process.exit(0);
    } catch (err) {
      console.error('[ERROR] Error during shutdown:', err);
      process.exit(1);
    }
  };
}
