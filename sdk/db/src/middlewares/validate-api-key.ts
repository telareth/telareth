import type { NextFunction, Request, Response } from 'express';

import { redis } from '../helpers/redis-client.js';
import type { ApiKey } from '../schemas/api-key.js';
import { ApiKeySchema } from '../schemas/api-key.js';

/**
 * Middleware to validate an API key sent in the `x-api-key` header.
 * If valid, attaches the API key object to `req.apiKey`.
 * @param req Express request object.
 * @param res Express response object.
 * @param next Express next function.
 */
export async function validateApiKeyMiddleware(
  req: Request & { apiKey?: ApiKey },
  res: Response,
  next: NextFunction
): Promise<void> {
  const apiKeyHeader = req.headers['x-api-key'];
  if (!apiKeyHeader || typeof apiKeyHeader !== 'string') {
    res.status(401).json({ error: 'Missing API key' });
    return;
  }

  const raw = await redis.hGet('apiKeys', apiKeyHeader);
  if (!raw) {
    res.status(403).json({ error: 'Invalid API key' });
    return;
  }

  const key = ApiKeySchema.parse(JSON.parse(raw));
  if (key.revoked) {
    res.status(403).json({ error: 'Revoked API key' });
    return;
  }

  req.apiKey = key;
  next();
}
