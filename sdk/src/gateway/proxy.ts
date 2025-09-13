import type { Express, Request, Response } from 'express';

import { createProxyMiddleware } from 'http-proxy-middleware';

/**
 * Registers a proxy route on the given Express app.
 * @param app Express application instance where the proxy is mounted.
 * @param path The base path to match incoming requests for this proxy.
 * @param target The destination target URL where requests should be forwarded.
 */
function registerProxy(app: Express, path: string, target: string): void {
  app.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      logLevel: 'info',
      on: {
        /**
         * Event fired before a proxy request is sent.
         * @param proxyReq The outgoing proxy request object.
         * @param _req The incoming client request (unused).
         * @param _res The outgoing Express response (unused).
         */
        proxyReq: (proxyReq, _req: Request, _res: Response) => {
          console.log(`[PROXY] Forwarding request to: ${target}${path}`);
        },

        /**
         * Event fired when the proxy receives a response from the target.
         * @param _proxyRes The response received from the target server (unused).
         * @param _req The incoming client request (unused).
         * @param _res The outgoing Express response (unused).
         */
        proxyRes: (_proxyRes, _req: Request, _res: Response) => {
          console.log(`[PROXY] Response received from: ${target}`);
        },

        /**
         * Event fired when an error occurs in the proxy.
         * @param err The error object.
         * @param _req The incoming client request (unused).
         * @param _res The outgoing Express response (unused).
         */
        error: (err: Error, _req: Request, _res: Response) => {
          console.error(`[PROXY ERROR] ${err.message}`);
        },
      },
    })
  );
}

/**
 * Sets up service proxies on the given Express app.
 * Typically used to connect microservices behind the gateway.
 * @param app Express application instance.
 */
export async function setupServiceProxy(app: Express): Promise<void> {
  // TODO: fetch from DB instead of hardcoding
  registerProxy(app, '/api/service1', 'http://localhost:4001');
  registerProxy(app, '/api/service2', 'http://localhost:4002');

  console.log('[INFO] Service proxies registered');
}
