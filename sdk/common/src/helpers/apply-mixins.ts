/**
 * Generic constructor type for mixins.
 */
export type Constructor<T = object> = abstract new (...args: unknown[]) => T;

/**
 * Copies prototype members from one or more base classes into a derived class.
 * @param derivedCtor The target class that should receive the mixin methods.
 * @param baseCtors One or more base classes whose prototypes will be mixed in.
 * @example
 * ```ts
 * import express from 'express';
 * import { applyMixins, BaseDsrcClient } from '@telareth/common';
 * import { DsrcClient } from '@telareth/dsrc-psql';
 *
 * // Mix in shared BaseDsrcClient logic into DsrcClient
 * applyMixins(DsrcClient, [BaseDsrcClient]);
 *
 * const app = express();
 * const client = new DsrcClient();
 *
 * // Use readiness middleware
 * app.use(client.readinessMiddleware.bind(client));
 *
 * // Health endpoint
 * app.get('/health', client.healthHandler.bind(client));
 *
 * // Database unavailable endpoint
 * app.get('/probs/database-unavailable', client.databaseUnavailableHandler.bind(client));
 *
 * app.listen(3000, () => console.log('Server running on http://localhost:3000'));
 *
 * // Using TRPC/OpenAPI-like procedures
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
export function applyMixins(
  derivedCtor: Constructor,
  baseCtors: Constructor[]
): void {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== 'constructor') {
        const desc = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
        if (desc) {
          Object.defineProperty(derivedCtor.prototype, name, desc);
        }
      }
    });
  });
}
