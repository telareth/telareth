import type { Request, Response } from 'express';

/**
 * Handles health check requests and responds with service status information.
 * @param _req Express request object (unused).
 * @param res Express response object used to send the health status.
 */
export function healthzHandler(_req: Request, res: Response) {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
