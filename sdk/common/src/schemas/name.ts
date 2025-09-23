import { z } from 'zod';

export const NAME_REGEX =
  /^(?:[a-z0-9]+(?:-[a-z0-9]+)*)(?::[a-z0-9]+(?:-[a-z0-9]+)*)*$/;

export const $NameSchema = z.string().min(3).max(24).regex(NAME_REGEX);

export const NameSchema = $NameSchema.optional();

export type RawName = z.input<typeof NameSchema>;
export type ParsedName = z.output<typeof NameSchema>;
