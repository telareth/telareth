import type z from 'zod';

import type { RawAppOptions } from '../schemas/app.js';
import { AppOptionsSchema } from '../schemas/app.js';

/**
 * Parses the raw/unsafe App options.
 * @param raw The raw/unsafe App options.
 * @returns The parsed options.
 * @throws "Invalid application options" if options do not meet requirements.
 */
export function parseAppOptions(
  raw?: RawAppOptions
): z.output<typeof AppOptionsSchema> {
  const result = AppOptionsSchema.safeParse(raw);

  if (!result.success) {
    throw new Error('Invalid application options', { cause: result.error });
  }

  return result.data;
}
