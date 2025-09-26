import { generateRandomName } from '@telareth/common';
import type { AppOptions, RawAppOptions } from '../schemas/app.js';
import { parseAppOptions } from './parse-app-options.js';

/**
 * Configures App options.
 * @param raw The raw/unsafe App options.
 * @returns The App options object.
 */
export function setupAppOptions(raw?: RawAppOptions): AppOptions {
  const options = parseAppOptions(raw) ?? {};

  const randomName = generateRandomName(3);

  return {
    name: options.name ?? `app:${randomName}`,
    port: Number(options.port ?? '4000'),
    helmet: options.helmet ?? true,
    cors: options.cors ?? true,
    logger: options.logger ?? true,
    httpLogger: options.httpLogger ?? false,
    rateLimit: options.rateLimit ?? false,
  };
}
