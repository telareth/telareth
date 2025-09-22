import type { CorsOptions } from 'cors';
import { default as cors } from 'cors';
import { z } from 'zod';

import { StringOrArraySchema } from '@telareth/common/schemas';

export { cors };
export { type CorsOptions };

export const HTTP_METHOD = [
  'GET',
  'HEAD',
  'PUT',
  'PATCH',
  'POST',
  'DELETE',
] as const;

export const HttpMethodSchema = z.enum(HTTP_METHOD);

const OriginArraySchema = z.array(
  z.union([z.string(), z.instanceof(RegExp), z.boolean()])
);

const OriginCallbackSchema = z.function({
  input: [
    z.string().optional(),
    z.function({
      input: [
        z.instanceof(Error).nullable(),
        z.union([z.string(), z.boolean()]).optional(),
      ],
      output: z.void(),
    }),
  ],
  output: z.void(),
});

const OriginSchema = z.union([
  z.boolean(),
  z.string(),
  z.literal('*'),
  z.instanceof(RegExp),
  OriginArraySchema,
  OriginCallbackSchema,
]);

export const $CorsOptionsSchema = z.looseObject({
  origin: OriginSchema.optional(),
  methods: StringOrArraySchema.optional(),
  exposedHeaders: StringOrArraySchema.optional(),
  credentials: z.boolean().optional(),
  maxAge: z.number().optional(),
  preflightContinue: z.boolean().optional(),
  optionsSuccessStatus: z.number().optional(),
});

export const CorsOptionsSchema = z
  .union([z.boolean(), $CorsOptionsSchema])
  .optional();

export type RawCorsOptions = z.input<typeof CorsOptionsSchema>;
export type ParsedCorsOptions = z.output<typeof CorsOptionsSchema>;

/**
 * Default options (safe values).
 */
export const DEFAULT_CORS_OPTIONS: RawCorsOptions = {
  origin: '*', // Allows all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Explicitly list common methods
  preflightContinue: false,
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};
