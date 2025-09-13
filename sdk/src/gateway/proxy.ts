import type { Express, Request, Response } from 'express';
import type { ClientRequest, IncomingMessage } from 'http';
import type { Socket } from 'net';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { dsrc } from '../datasource/index.js';
import type { ServiceModel } from '../datasource/types/models.js';

/**
 * Sets up dynamic service proxies for the gateway.
 *
 * @param app Express application instance
 */
export async function setupServiceProxy(app: Express): Promise<void> {
  const services: ServiceModel[] = await dsrc.service.findMany({
    where: { active: true },
    include: { ApiKey: true },
  });

  services.forEach((service) => {
    const proxyMiddleware = createProxyMiddleware({
      target: service.origin,
      changeOrigin: true,
      pathRewrite: (path: string) => path.replace(service.prefix, ''),
      on: {
        proxyReq: (proxyReq: ClientRequest, req: Request, res: Response) => {
          proxyReq.setHeader('x-service-api-key', service.apiKey);
        },
        proxyRes: (proxyRes: IncomingMessage, req: Request, res: Response) => {
          // Optional: handle response
        },
        error: (err: Error, req: Request, res: Response | Socket) => {
          console.error(`[ERROR] Proxy error for ${service.prefix}:`, err);
          if ('status' in res && typeof res.status === 'function') {
            // Only send a response if `res` is an Express Response
            res.status(502).send('Bad Gateway');
          }
        },
      },
    });

    app.use(service.prefix, proxyMiddleware);
    console.log(
      `[INFO] Proxy configured: ${service.prefix} → ${service.origin}`
    );
  });
}
