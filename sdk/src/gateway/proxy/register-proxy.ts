import { ServerResponse } from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Socket } from 'net';

import type { Application, Request, Response } from 'express';

/**
 * Registers a proxy middleware on the given Express app.
 * @param app Express application instance where the proxy is mounted.
 * @param path The base path to match incoming requests for this proxy.
 * @param target The destination target URL where requests should be forwarded.
 * @param apiKey Optional API key to be set in the proxied request headers.
 */
export function registerProxy(
  app: Application,
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
