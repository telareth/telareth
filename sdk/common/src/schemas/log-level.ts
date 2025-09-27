import { z } from 'zod';

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

export type LogLevel = z.infer<typeof LogLevelSchema>;
