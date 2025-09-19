import { z } from 'zod';

import { MorganFormatSchema } from './morgan.js';

export const LoggerSchema = z
  .object({
    http: MorganFormatSchema,
  })
  .optional()
  .default({
    http: 'tiny',
  });

export type Logger = z.infer<typeof LoggerSchema>;
export type RawLoggerSchema = z.input<typeof LoggerSchema>;
export type ParsedLoggerSchema = z.output<typeof LoggerSchema>;
