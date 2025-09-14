import type { Application } from 'express';

import { dsrc } from '../../datasource/index.js';
import type { Service } from '../../datasource/types/client.js';

import { registerProxy } from './register-proxy.js';

/**
 * Sets up proxy routes for all active services on the given Express app.
 *
 * Fetches active services from the database and registers a proxy for each,
 * mounting them under the given base path + service prefix.
 * @param app Express application instance where service proxies will be registered.
 * @param basePath The base path under which service proxies will be mounted.
 */
export async function setupServiceProxy(
  app: Application,
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
