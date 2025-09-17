import z from 'zod';

export const RedisUrlSchema = z
  .url({ protocol: /^redis$/ })
  .default('redis://localhost:6379');

export type RedisUrl = z.infer<typeof RedisUrlSchema>;
export type RedisUrlInput = z.input<typeof RedisUrlSchema>;
export type RedisUrlOutput = z.output<typeof RedisUrlSchema>;

export const REDIS_URL: RedisUrlOutput = RedisUrlSchema.parse(
  process.env.REDIS_URL
);
