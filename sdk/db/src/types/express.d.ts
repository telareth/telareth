import 'express-serve-static-core';

import type { RedisClientType } from 'redis';

import type { ApiKey } from '../schemas/api-key.js';

declare module 'express-serve-static-core' {
  interface Request {
    redis?: RedisClientType;
    apiKey?: ApiKey;
  }
}
