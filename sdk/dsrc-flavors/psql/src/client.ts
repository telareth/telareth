import type { Constructor, HealthRecord } from '@telareth/common';
import { applyMixins, BaseDsrcClient } from '@telareth/common';
import { PrismaClient } from './dsrc/client.js';
import * as Schemas from './schemas/index.js';

/**
 * Prisma-powered DsrcClient for PostgreSQL.
 * Combines PrismaClient (models) with BaseDsrcClient (shared logic).
 * @example
 * ```ts
 * import express from 'express';
 * import { DsrcClient } from '@telareth/dsrc-psql';
 * import { BaseDsrcClient, applyMixins } from '@telareth/common';
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
export class DsrcClient extends PrismaClient {
  static schemas = Schemas;
  public schemas = Schemas;

  static HealthStatus = Schemas.HealthStatusSchema;
  public HealthStatus = Schemas.HealthStatusSchema;

  /**
   * Checks if the database is ready.
   * @returns Promise resolving to true if Health row exists.
   */
  async isReady(): Promise<boolean> {
    try {
      const entry = await this.health.findUnique({
        where: { id: 1 },
        select: { id: true },
      });
      return !!entry;
    } catch {
      return false;
    }
  }

  /**
   * Returns the singleton Health entry, creating one if none exists.
   * @param extraMetadata Additional metadata to include.
   * @returns Promise resolving to the Health record.
   */
  async getHealth(
    extraMetadata: Record<string, unknown> = {}
  ): Promise<HealthRecord> {
    const record = await this.health.upsert({
      where: { id: 1 },
      update: {
        metadata: { ...extraMetadata, checkedAt: new Date().toISOString() },
      },
      create: {
        id: 1,
        status: 'OK',
        metadata: { ...extraMetadata, createdAt: new Date().toISOString() },
      },
    });

    return {
      id: record.id,
      status: String(record.status),
      lastChecked: record.lastChecked,
      metadata: record.metadata as Record<string, unknown> | null,
    };
  }
}

// Mix in shared logic
applyMixins(DsrcClient as Constructor, [BaseDsrcClient as Constructor]);
