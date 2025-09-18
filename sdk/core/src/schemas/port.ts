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

export const PortSchema = z
  .union([
    z
      .string()
      .regex(/^\d{4,5}$/)
      .transform(Number),
    z.number().int().min(3000).max(65535),
  ])
  .optional()
  .default(4000)
  .transform((port: number) => {
    let candidate = port;
    while (!ALLOWED_PORTS.has(candidate) && RESERVED_PORTS[candidate]) {
      console.warn(
        `[WARN] Port ${candidate} is commonly used by ${RESERVED_PORTS[candidate]}. Trying ${candidate + 1} instead.`
      );
      candidate++;
      if (candidate > 65535) {
        throw new Error(
          'No available port found (ran out of range 3000–65535)'
        );
      }
    }
    if (candidate !== port) {
      console.warn(`[INFO] Using port ${candidate} instead of ${port}.`);
    }
    return candidate;
  });

export type Port = z.infer<typeof PortSchema>;
export type PortInput = z.input<typeof PortSchema>;
export type PortOutput = z.output<typeof PortSchema>;
