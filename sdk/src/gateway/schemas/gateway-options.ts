import { z } from 'zod';

export const GatewayConfigSchema = z.object({
  GATEWAY_PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(3000),
  GATEWAY_URL: z.url().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(900000), // 15 min
  RATE_LIMIT_MAX: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default(100), // 100 requests
  GATEWAY_PREFIX_MODE: z.string().default(''),
});

export type GatewayOptions = z.infer<typeof GatewayConfigSchema>;
export type GatewayOptionsInput = z.input<typeof GatewayConfigSchema>;
export type GatewayOptionsOutput = z.output<typeof GatewayConfigSchema>;
