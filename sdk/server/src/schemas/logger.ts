import type { Logger, LoggerOptions as PinoLoggerOptions } from 'pino';
import { default as pino } from 'pino';
import { z } from 'zod';

export { pino as logger };

export const LOG_LEVEL = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'silent',
] as const;

export const LogLevelSchema = z.enum(LOG_LEVEL);

export const LoggerOptionsSchema = z
  .looseObject({
    level: LogLevelSchema.optional().default('info'),
    name: z.string().optional(),
    timestamp: z.boolean().optional(),
    formatters: z
      .object({
        level: z
          .function({
            input: z.tuple([z.string(), z.number()]),
            output: z.object({}),
          })
          .optional(),
        bindings: z
          .function({
            input: z.tuple([]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
        log: z
          .function({
            input: z.tuple([z.record(z.string(), z.unknown())]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
      })
      .optional(),
    base: z.record(z.string(), z.unknown()).optional(),
    redact: z
      .union([
        z.array(z.string()),
        z.array(z.string().regex(/.+/)),
        z.function({
          input: z.tuple([z.record(z.string(), z.unknown())]),
          output: z.record(z.string(), z.unknown()),
        }),
      ])
      .optional(),
    serializers: z
      .object({
        req: z
          .function({
            input: z.tuple([z.unknown()]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
        res: z
          .function({
            input: z.tuple([z.unknown()]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
        err: z
          .function({
            input: z.tuple([z.instanceof(Error)]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
      })
      .optional(),
    hooks: z
      .object({
        logMethod: z
          .function({
            input: z.tuple([]).rest(z.unknown()),
            output: z.void(),
          })
          .optional(),
        errorHandler: z
          .function({
            input: z.tuple([z.instanceof(Error)]),
            output: z.void(),
          })
          .optional(),
        responseSerializer: z
          .function({
            input: z.tuple([z.unknown()]),
            output: z.record(z.string(), z.unknown()),
          })
          .optional(),
      })
      .optional(),
    transport: z
      .union([
        z.object({
          target: z.string(),
          options: z.record(z.string(), z.unknown()),
        }),
        z.array(
          z.object({
            target: z.string(),
            options: z.record(z.string(), z.unknown()),
          })
        ),
      ])
      .optional(),
  })
  .optional()
  .default({
    level: LogLevelSchema.enum.info,
  })
  .transform((val) => val as PinoLoggerOptions);

export { type Logger };
export type LogLevel = z.infer<typeof LogLevelSchema>;
export type LoggerOptions = z.infer<typeof LoggerOptionsSchema>;
export type RawLoggerOptions = z.input<typeof LoggerOptionsSchema>;
export type ParsedLoggerOptions = z.output<typeof LoggerOptionsSchema>;
