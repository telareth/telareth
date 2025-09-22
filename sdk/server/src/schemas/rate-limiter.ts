import type { Request, Response } from 'express';
import type {
  Options as RateLimitOptions,
  Store,
  ValueDeterminingMiddleware,
} from 'express-rate-limit';
import { z } from 'zod';

import { HandlerFnSchema } from '@telareth/common';

export { type RateLimitOptions };

/**
 * Limit function.
 * This is defined as a custom Zod type to match the express-rate-limit's type.
 * @example
 * (req, res) => 100
 * (req, res) => Promise.resolve(50)
 */
const LimitFnSchema = z.custom<ValueDeterminingMiddleware<number>>((val) => {
  return typeof val === 'function';
});

/**
 * Message function.
 * @example
 * (req, res) => 'Too many requests'
 * (req, res) => ({ error: 'Too many requests' })
 * (req, res) => Promise.resolve('Too many requests')
 */
const MessageFnSchema = z.function({
  /**
   * @param req The Express request object.
   * @param res The Express response object.
   */
  input: [z.custom<Request>(), z.custom<Response>()],
  output: z.union([
    z.string(),
    z.record(z.string(), z.unknown()),
    z.promise(z.union([z.string(), z.record(z.string(), z.unknown())])),
  ]),
});

/**
 * Identifier function.
 * @example
 * (req, res) => 'user-id'
 * (req, res) => Promise.resolve('user-id')
 */
const IdentifierFnSchema = z.function({
  /**
   * @param req The Express request object.
   * @param res The Express response object.
   */
  input: [z.custom<Request>(), z.custom<Response>()],
  output: z.union([z.string(), z.promise(z.string())]),
});

/**
 * Key generator function.
 * @example
 * (req, res) => 'custom-key'
 * (req, res) => Promise.resolve('custom-key')
 */
const KeyGenFnSchema = z.function({
  /**
   * @param req The Express request object.
   * @param res The Express response object.
   */
  input: [z.custom<Request>(), z.custom<Response>()],
  output: z.union([z.string(), z.promise(z.string())]),
});

/**
 * Boolean function.
 * @example
 * (req, res) => true
 * (req, res) => Promise.resolve(false)
 */
const BoolFnSchema = z.function({
  /**
   * @param req The Express request object.
   * @param res The Express response object.
   */
  input: [z.custom<Request>(), z.custom<Response>()],
  output: z.union([z.boolean(), z.promise(z.boolean())]),
});

/**
 * IPv6 subnet function that returns a number or a promise of a number.
 * @example
 * (req, res) => 64
 * (req, res) => Promise.resolve(32)
 */
const Ipv6FnSchema = z.function({
  /**
   * @param req The Express request object.
   * @param res The Express response object.
   */
  input: [z.custom<Request>(), z.custom<Response>()],
  output: z.union([
    z.number().min(32).max(64),
    z.promise(z.number().min(32).max(64)),
  ]),
});

export const $RateLimitOptionsSchema = z.object({
  windowMs: z.number().optional(),
  limit: z.union([z.number(), LimitFnSchema]).optional(),
  message: z
    .union([z.string(), z.record(z.string(), z.unknown()), MessageFnSchema])
    .optional(),
  statusCode: z.number().optional(),
  handler: HandlerFnSchema.optional(),
  legacyHeaders: z.boolean().optional(),
  standardHeaders: z.enum(['draft-6', 'draft-7', 'draft-8']).optional(),
  identifier: z.union([z.string(), IdentifierFnSchema]).optional(),
  store: z.custom<Store>().optional(),
  passOnStoreError: z.boolean().optional(),
  keyGenerator: KeyGenFnSchema.optional(),
  ipv6Subnet: z
    .union([z.number().min(32).max(64), z.literal(false), Ipv6FnSchema])
    .optional(),
  requestPropertyName: z.string().optional(),
  skip: BoolFnSchema.optional(),
  skipSuccessfulRequests: z.boolean().optional(),
  skipFailedRequests: z.boolean().optional(),
  requestWasSuccessful: BoolFnSchema.optional(),
  validate: z
    .union([z.boolean(), z.record(z.string(), z.unknown())])
    .optional(),
});

export const RateLimitOptionsSchema = z
  .union([z.boolean(), $RateLimitOptionsSchema])
  .optional();

export type RawRateLimitOptions = z.input<typeof RateLimitOptionsSchema>;
export type ParsedRateLimitOptions = z.output<typeof RateLimitOptionsSchema>;

/**
 * Default options (safe values).
 */
export const DEFAULT_RATE_LIMIT_OPTIONS: Partial<RateLimitOptions> = {
  windowMs: 60_000,
  limit: 100,
  message: 'Too many requests, please try again later.',
  statusCode: 429,
  legacyHeaders: false,
  standardHeaders: 'draft-7',
  passOnStoreError: false,
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
};
