import type { ParsedName, RawName } from '../schemas/name.js';
import { NameSchema } from '../schemas/name.js';
import { generateRandomName } from './generate-random-name.js';

/**
 * Parses the raw name (either a real name or undefined).
 * @param raw The string to parse.
 * @returns The parsed string or a generated name.
 * @throws "Invalid name" if the provided string doesn' meet the requisites.
 */
export function parseName(raw?: RawName): ParsedName {
  if (raw) {
    const result = NameSchema.safeParse(raw);

    if (!result.success) {
      throw new Error('Invalid name.', { cause: result.error });
    }

    return result.data;
  }

  return generateRandomName(3);
}
