import type { NextFunction, Request, Response } from 'express';

import { PROXIES_READY } from '../../consts.js';

/**
 * Middleware that attaches proxy readiness status to the request.
 * @param req Express request object, will receive `proxiesReady`.
 * @param _res Express response object (unused).
 * @param next Express next function to continue middleware chain.
 */
export function proxyStatusMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const app = req.app;
  const status = (app.get(PROXIES_READY) as boolean) ?? false;

  req.proxiesReady = status;

  next();
}
