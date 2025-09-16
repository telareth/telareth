import type { Application, Handler, Router } from 'express';
import express from 'express';

import type { HttpMethod } from '../../types/http-methods.js';
import type {
  GatewayRouterOptionsInput,
  GatewayRouterOptionsOutput,
} from '../schemas/gateway-router-options.js';
import { parseGatewayRouterOptions } from '../utils/parse-gateway-router-options.js';
import type { MountRouteArgs } from './types/mount-route.js';

/**
 * GatewayRouter is responsible for mounting routes and middlewares onto an Express application.
 */
export class GatewayRouter {
  private readonly app: Application | undefined;
  private readonly options: GatewayRouterOptionsOutput | null;
  private readonly router: Router | undefined;

  /**
   * @param options Configuration object containing Express app, path, and middlewares for the Gateway Router.
   */
  constructor(options: GatewayRouterOptionsInput) {
    this.options = parseGatewayRouterOptions(options);

    if (this.options !== null) {
      this.app = this.options.app;

      this.router = express.Router({ mergeParams: true });

      if (this.options.middlewares.length > 0) {
        this.router.use(...this.options.middlewares);
      }

      this.app.use(this.options.path, this.router);
    }
  }

  /**
   * Smartly mounts a route on the internal Express router.
   * Flexible arguments:
   * 1. Only handlers → defaults method='get', path='/'
   * 2. First string '/' → path, rest handlers
   * 3. First string is HttpMethod → method
   * 4. Method + path + handlers.
   * @param args @see MountRouteArgs.
   */
  public mountRoute(...args: MountRouteArgs) {
    if (!this.router) {
      console.warn('[WARN] Cannot mount route: router is undefined');
      return;
    }

    let method: HttpMethod = 'get';
    let path = '/';
    let handlers: Handler[] = [];

    const httpMethods: HttpMethod[] = [
      'get',
      'post',
      'put',
      'patch',
      'delete',
      'options',
    ];

    let startIndex = 0;

    // Detect method
    const firstArg = args[0];
    if (
      typeof firstArg === 'string' &&
      httpMethods.includes(firstArg as HttpMethod)
    ) {
      method = firstArg as HttpMethod;
      startIndex++;
    }

    // Detect path
    const secondArg = args[startIndex];
    if (typeof secondArg === 'string' && secondArg.startsWith('/')) {
      path = secondArg;
      startIndex++;
    }

    // The rest are handlers
    handlers = args
      .slice(startIndex)
      .filter((h): h is Handler => typeof h === 'function');

    if (!handlers.length) {
      console.warn(
        `[WARN] No handlers provided for route ${method.toUpperCase()} ${path}`
      );
      return;
    }

    this.router[method](path, ...handlers);
    console.log(`[INFO] Mounted route: [${method.toUpperCase()}] ${path}`);
  }
}
