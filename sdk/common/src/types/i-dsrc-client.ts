import type { NextFunction, Request, Response } from 'express';

import type { HealthRecord } from './health-record.js';

/**
 * Interface that all flavored DsrcClient implementations must satisfy.
 */
export interface IDsrcClient<T extends HealthRecord = HealthRecord> {
  isReady(): Promise<boolean>;
  getHealth(extraMetadata?: Record<string, unknown>): Promise<T>;
  readinessMiddleware: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  healthHandler: (req: Request, res: Response) => Promise<void>;
  databaseUnavailableHandler: (req: Request, res: Response) => void;
  healthProcedure(): { query: () => Promise<T> };
  readinessProcedure(): { query: () => Promise<{ ready: boolean }> };
}
