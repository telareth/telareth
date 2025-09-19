import { z } from 'zod';

export const MORGAN_FORMAT = [
  'combined',
  'common',
  'dev',
  'short',
  'tiny',
] as const;

export const MorganFormatSchema = z
  .enum(MORGAN_FORMAT)
  .optional()
  .default('tiny');

export type MorganFormat = z.infer<typeof MorganFormatSchema>;
export type RawMorganFormat = z.input<typeof MorganFormatSchema>;
export type ParsedMorganFormat = z.output<typeof MorganFormatSchema>;
