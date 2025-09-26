import type { NextFunction, Request, Response } from 'express';

import type { HealthRecord } from './types/health-record.js';

/**
 * Abstract base client with shared logic for readiness, health, and problem details.
 * Each flavor (psql, mysql, mongo, …) must implement `isReady` and `getHealth`.
 * @example
 * ```ts
 * import express from 'express';
 * import { BaseDsrcClient, applyMixins } from '@telareth/common';
 * import { DsrcClient } from '@telareth/dsrc-psql';
 *
 * // Step 1: Mix in BaseDsrcClient methods into DsrcClient
 * applyMixins(DsrcClient, [BaseDsrcClient]);
 *
 * // Step 2: Create a client instance
 * const client = new DsrcClient();
 *
 * // Step 3: Attach Express middleware and routes
 * const app = express();
 * app.use(client.readinessMiddleware.bind(client));
 * app.get('/health', client.healthHandler.bind(client));
 * app.get('/probs/database-unavailable', client.databaseUnavailableHandler.bind(client));
 *
 * app.listen(3000, () => console.log('Server running on http://localhost:3000'));
 *
 * // Step 4: Use TRPC/OpenAPI-like procedures
 * async function checkHealth() {
 *   const health = await client.healthProcedure().query();
 *   console.log('Health status:', health.status);
 *
 *   const readiness = await client.readinessProcedure().query();
 *   console.log('Database ready:', readiness.ready);
 * }
 *
 * checkHealth();
 * ```
 */
export abstract class BaseDsrcClient {
  /**
   * Checks if the DB is ready. Implemented by flavors.
   * @returns Promise resolving to true if the DB is ready, false otherwise.
   */
  abstract isReady(): Promise<boolean>;

  /**
   * Gets or creates the singleton Health record. Implemented by flavors.
   * @param extraMetadata Optional extra metadata to attach to the health record.
   * @returns Promise resolving to the current HealthRecord.
   */
  abstract getHealth(
    extraMetadata?: Record<string, unknown>
  ): Promise<HealthRecord>;

  /**
   * Express middleware that blocks requests if the database is not ready.
   * @param _req Express request (unused).
   * @param res Express response object used to send error responses.
   * @param next Express next function to continue the pipeline if DB is ready.
   * @returns Promise&lt;void> once the readiness check is complete.
   */
  async readinessMiddleware(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const ready = await this.isReady();
    if (!ready) {
      this.databaseUnavailableHandler(_req, res);
      return;
    }
    next();
  }

  /**
   * Express handler for the `/health` endpoint.
   * @param req Express request object.
   * @param res Express response object to return the health status.
   * @returns Promise&lt;void> once the response has been sent.
   */
  async healthHandler(req: Request, res: Response): Promise<void> {
    try {
      const health = await this.getHealth({ requestIp: req.ip });
      res.status(health.status === 'OK' ? 200 : 503).json(health);
    } catch (err) {
      console.error(err);
      this.databaseUnavailableHandler(req, res);
    }
  }

  /**
   * Generates the Problem Details object for database unavailability.
   * @param req Express request used to extract hostname and URL.
   * @returns A Problem Details object describing the DB unavailability.
   */
  getDatabaseUnavailableProblem(req: Request) {
    const hostname = req.app.get('hostname') || 'example.com';
    return {
      type: `https://${hostname}/probs/database-unavailable`,
      title: 'Database Not Ready',
      status: 503,
      detail:
        'The database is currently unavailable or the Health record could not be retrieved. ' +
        'All dependent services may be degraded. Please retry later.',
      instance: req.originalUrl,
    };
  }

  /**
   * Express handler for `/probs/database-unavailable`.
   * @param req Express request object.
   * @param res Express response object that sends either JSON or Markdown.
   */
  databaseUnavailableHandler(req: Request, res: Response): void {
    const accept = req.headers['accept'] || '';
    const problemDetails = this.getDatabaseUnavailableProblem(req);

    if (accept.includes('text/markdown')) {
      res.status(503).type('text/markdown').send(`\
# ${problemDetails.title}

**Status:** ${problemDetails.status}
**Instance:** ${problemDetails.instance}

${problemDetails.detail}
`);
    } else {
      res.status(503).json(problemDetails);
    }
  }

  /**
   * Returns the TRPC/OpenAPI procedure for Health.
   * @returns An object exposing a `query` method that resolves to a HealthRecord.
   * @example
   * ```ts
   * const healthProc = client.healthProcedure();
   * const result = await healthProc.query();
   * console.log(result.status); // "OK"
   * ```
   */
  healthProcedure = () => ({
    /**
     * Queries the current health record of the system.
     * @returns Promise resolving to the HealthRecord.
     */
    query: async (): Promise<HealthRecord> => this.getHealth(),
  });

  /**
   * Returns the TRPC/OpenAPI procedure for readiness.
   * @returns An object exposing a `query` method that resolves to `{ ready: boolean }`.
   * @example
   * ```ts
   * const readinessProc = client.readinessProcedure();
   * const result = await readinessProc.query();
   * console.log(result.ready); // true or false
   * ```
   */
  readinessProcedure = () => ({
    /**
     * Queries whether the database is ready.
     * @returns Promise resolving to an object with `ready` boolean.
     */
    query: async (): Promise<{ ready: boolean }> => ({
      ready: await this.isReady(),
    }),
  });
}
