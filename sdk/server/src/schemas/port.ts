import { z } from 'zod';

export const RESERVED_PORTS: Record<number, string> = {
  // Databases
  3306: 'MySQL',
  5432: 'PostgreSQL',
  6379: 'Redis',
  27017: 'MongoDB',
  27018: 'MongoDB shard/replica',
  9200: 'Elasticsearch',
  5601: 'Kibana',
  // Dev tools
  5173: 'Vite default port',
  8888: 'Jupyter Notebook',
  // AI / ML servers
  6006: 'TensorBoard',
  5000: 'MLflow (also common for Flask)',
  8265: 'Ray Dashboard',
  8787: 'Dask Dashboard',
  11434: 'Ollama API',
};

export const ALLOWED_PORTS = new Set([3000, 8000, 8080]);

// Schema: accepts numeric strings or numbers without transformations
export const PortSchema = z
  .union([z.string().regex(/^\d{4,5}$/), z.number().int().min(3000).max(65535)])
  .optional();

export type RawPort = z.input<typeof PortSchema>;

/**
 * Parses a raw port value and returns a valid port as number.
 * - If undefined, uses 4000 as default.
 * - Skips reserved ports if needed.
 * - Ensures the port is within 3000–65535.
 * @param raw The raw string or number to parse.
 * @returns The validated port number.
 */
export function parsePort(raw?: RawPort): number {
  let port: number;

  if (raw === undefined) {
    port = 4000;
  } else if (typeof raw === 'string') {
    port = Number(raw);
  } else {
    port = raw;
  }

  if (!Number.isInteger(port) || port < 3000 || port > 65535) {
    throw new Error(
      `Invalid port: ${port}. Must be an integer between 3000 and 65535.`
    );
  }

  let candidate = port;
  while (!ALLOWED_PORTS.has(candidate) && RESERVED_PORTS[candidate]) {
    console.warn(
      `[WARN] Port ${candidate} is commonly used by ${RESERVED_PORTS[candidate]}. Trying ${candidate + 1} instead.`
    );
    candidate++;
    if (candidate > 65535) {
      throw new Error('No available port found (ran out of range 3000–65535)');
    }
  }

  if (candidate !== port) {
    console.warn(`[INFO] Using port ${candidate} instead of ${port}.`);
  }

  return candidate;
}
