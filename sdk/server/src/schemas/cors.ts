import type { CorsOptions } from 'cors';
import { default as cors } from 'cors';
import { z } from 'zod';

import { StringOrArraySchema, StringOrRegExpSchema } from '@telareth/common';

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

const OriginArraySchema = z.array(StringOrRegExpSchema);

const OriginCallbackSchema = z.function({
  input: [
    z.union([z.null(), z.string()]).optional(),
    z.function({
      input: [
        z.union([z.instanceof(Error), z.null()]),
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

export const DEFAULT_CORS_OPTIONS = {
  origin: '*', // Allows all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Explicitly list common methods
  preflightContinue: false,
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};

export const CorsSchema = z
  .looseObject({
    origin: OriginSchema.optional(),
    methods: StringOrArraySchema.optional(),
    exposedHeaders: StringOrArraySchema.optional(),
    credentials: z.boolean().optional(),
    maxAge: z.number().optional(),
    preflightContinue: z.boolean().optional(),
    optionsSuccessStatus: z.number().optional(),
  })
  .optional()
  .default(DEFAULT_CORS_OPTIONS)
  .transform((val) => val as CorsOptions);

export type Cors = z.infer<typeof CorsSchema>;
export type RawCors = z.input<typeof CorsSchema>;
export type ParsedCors = z.output<typeof CorsSchema>;
