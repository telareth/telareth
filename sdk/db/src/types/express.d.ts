import 'express-serve-static-core';

import type { RedisClientType } from 'redis';

import type { ApiKey } from '../schemas/api-key.ts';

declare module 'express-serve-static-core' {
  interface Request {
    redis?: RedisClientType;
    apiKey?: ApiKey;
  }
}
