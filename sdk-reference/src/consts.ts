import { parseBool } from './utils/parse-bool.js';
import { parseNodeEnv } from './utils/parse-node-env.js';

export const NODE_ENV = parseNodeEnv(process.env.NODE_ENV);

export const DEBUG = parseBool(process.env.DEBUG);

export const ENV_PRODUCTION = NODE_ENV === 'production';
export const ENV_TEST = NODE_ENV === 'test';

export const PROXIES_READY = 'proxies-ready';
