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
      on: {
        /**
         * Called before forwarding the request to the target.
         * @param _proxyReq The proxy request object.
         * @param _req The original Express request object.
         * @param _res The Express response object.
         */
        proxyReq: (_proxyReq, _req: Request, _res: Response) => {
          console.log(`[PROXY] Forwarding request to: ${target}${path}`);
        },

        /**
         * Called after receiving a response from the target server.
         * @param _proxyRes The response object from the proxied server.
         * @param _req The original Express request object.
         * @param _res The Express response object.
         */
        proxyRes: (_proxyRes, _req: Request, _res: Response) => {
          console.log(`[PROXY] Response received from: ${target}`);
        },

        /**
         * Handles proxy errors.
         * @param err The error encountered during proxying.
         * @param _req The original Express request object.
         * @param _res The Express response object or network socket.
         */
        error: (
          err: Error,
          _req: Request,
          _res: Response | import('net').Socket
        ) => {
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
