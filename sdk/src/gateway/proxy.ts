import type { Express } from 'express';

import type { ClientRequest } from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { dsrc } from '../datasource/index.js';
import type { ServiceModel } from '../datasource/types/models.js';

/**
 * Sets up dynamic service proxies for the gateway.
 *
 * Fetches active services from the database and attaches proxy middlewares
 * to route requests with the service prefix to the service origin.
 * @param app The Express application instance.
 * @returns Void.
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

      /**
       * @param path
       */
      pathRewrite: (path: string) => path.replace(service.prefix, ''),

      /**
       * @param proxyReq
       * @param _req
       * @param _res
       */
      onProxyReq: (proxyReq: ClientRequest, _req: unknown, _res: unknown) => {
        proxyReq.setHeader('x-service-api-key', service.apiKey);
      },
    });

    app.use(service.prefix, proxyMiddleware);
    console.log(
      `[INFO] Proxy configured: ${service.prefix} → ${service.origin}`
    );
  });
}
