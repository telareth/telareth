import type { Express, Request, Response } from 'express';

import { ServerResponse } from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Socket } from 'net';

import { dsrc } from '../datasource/index.js';
import type { Service } from '../datasource/types/client.js';

/**
 * Registers a proxy middleware on the given Express app.
 * @param app Express application instance where the proxy is mounted.
 * @param path The base path to match incoming requests for this proxy.
 * @param target The destination target URL where requests should be forwarded.
 * @param apiKey Optional API key to be set in the proxied request headers.
 */
function registerProxy(
  app: Express,
  path: string,
  target: string,
  apiKey?: string
): void {
  app.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,

      /**
       * Rewrites the request path by removing the proxy mount path.
       * @param p The original request path.
       */
      pathRewrite: (p: string) => p.replace(path, ''),
      on: {
        /**
         * Event fired before forwarding the request to the target server.
         * @param proxyReq The outgoing proxy request object.
         */
        proxyReq: (proxyReq) => {
          if (apiKey) {
            proxyReq.setHeader('x-service-api-key', apiKey);
          }
          console.log(`[PROXY] Forwarding request → ${target}`);
        },

        /**
         * Event fired when the proxy receives a response from the target.
         */
        proxyRes: () => {
          console.log(`[PROXY] Response received ← ${target}`);
        },

        /**
         * Event fired when an error occurs in the proxy.
         * @param err The error that occurred.
         * @param _req The incoming Express request object.
         * @param res The response or socket object to send the error to.
         */
        error: (err: Error, _req: Request, res: Response | Socket) => {
          console.error(`[PROXY ERROR] ${err.message}`);

          if (res instanceof ServerResponse) {
            if (!res.headersSent) {
              res.writeHead(502, { 'Content-Type': 'application/json' });
            }
            res.end(JSON.stringify({ error: 'Bad Gateway' }));
          } else if (res instanceof Socket) {
            res.end();
          }
        },
      },
    })
  );
}

/**
 * Sets up proxy routes for all active services on the given Express app.
 *
 * Fetches active services from the database and registers a proxy for each,
 * mounting them under the given base path + service prefix.
 * @param app Express application instance where service proxies will be registered.
 * @param basePath The base path under which service proxies will be mounted.
 */
export async function setupServiceProxy(
  app: Express,
  basePath: string
): Promise<void> {
  const services: Service[] = await dsrc.service.findMany({
    where: { active: true },
    include: { ApiKey: true },
  });

  services.forEach((service) => {
    // Normalize: avoid double slashes
    const normalizedBase =
      basePath.endsWith('/') && basePath !== '/'
        ? basePath.slice(0, -1)
        : basePath;
    const mountPath = `${normalizedBase}${service.prefix}`;

    registerProxy(app, mountPath, service.origin, service.apiKey ?? undefined);

    console.log(`[INFO] Proxy configured: ${mountPath} → ${service.origin}`);
  });
}
