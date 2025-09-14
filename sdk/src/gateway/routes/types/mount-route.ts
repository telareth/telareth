import type { Handler } from 'express';

import type { HttpMethod } from '../../../types/http-methods.js';

export type MountRouteArgs =
  | [method: HttpMethod, path: string, ...handlers: Handler[]]
  | [method: HttpMethod, ...handlers: Handler[]]
  | [path: string, ...handlers: Handler[]]
  | [...handlers: Handler[]];
