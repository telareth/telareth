type Input = string | null | undefined;
type NormalizedEnv = 'production' | 'development' | 'test';

/**
 * Normalize the NODE_ENV variable into a safe, canonical value.
 * Defaults to 'development' when missing or invalid.
 * @param input The environment string to normalize.
 * @returns A canonical NODE_ENV value: 'production' | 'development' | 'test'.
 */
export function parseNodeEnv(input: Input): NormalizedEnv {
  if (!input) return 'development';

  const normalized = input.trim().toLowerCase();

  switch (normalized) {
    case 'production':
    case 'prod':
      return 'production';

    case 'test':
      return 'test';

    case 'development':
    case 'dev':
      return 'development';

    default:
      console.warn(
        `[WARN] Unrecognized NODE_ENV value: "${input}". Defaulting to 'development'.`,
        'Consider using a separate variable like APP_ENV for custom values.'
      );
      return 'development';
  }
}
