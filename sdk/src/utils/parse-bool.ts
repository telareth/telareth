type Input = string | number | boolean | null | undefined;

/**
 * Parses an value into a boolean.
 * @param input The object to parse.
 *
 * - Accepts `"true"`, `"1"`, `1`, or `true` as truthy.
 * - Accepts `"false"`, `"0"`, `0`, or `false` as falsy.
 * - Any other value defaults to `false`.
 */
export function parseBool(input: Input): boolean {
  if (typeof input === 'boolean') return input;
  if (typeof input === 'number') return input === 1;
  if (typeof input === 'string') {
    const normalized = input.trim().toLowerCase();
    return normalized === 'true' || normalized === '1';
  }
  return false;
}
