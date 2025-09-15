import type { Request, Response } from 'express';

import { PROXIES_READY } from '../../../consts.js';
import { getPrismaClient } from '../../../db/client.js';

/**
 * Handles the readiness check endpoint.
 *
 * Checks both database connectivity and whether proxies are initialized.
 * Returns HTTP 200 if the system is ready, 503 otherwise.
 * @param req Express request object.
 * @param res Express response object.
 * @returns JSON response indicating readiness status.
 */
export async function readinessHandler(req: Request, res: Response) {
  const proxiesReady = (req.app.get(PROXIES_READY) as boolean) ?? false;
  const prisma = getPrismaClient();

  try {
    await prisma.$queryRaw`SELECT 1`;
    if (proxiesReady) {
      return res
        .status(503)
        .json({ status: 'not ready', reason: 'Proxies not initialized' });
    }
    return res.status(200).json({ status: 'ready' });
  } catch (err) {
    console.error('[ERROR] Readiness check failed:', err);
    return res
      .status(503)
      .json({ status: 'not ready', reason: 'DB not reachable' });
  }
}
