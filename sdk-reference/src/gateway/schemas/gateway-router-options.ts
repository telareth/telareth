import type { Application, Handler } from 'express';
import { z } from 'zod';

export const GatewayRouterOptionsSchema = z.object({
  app: z.custom<Application>(),

  path: z.string().default('/'),

  middlewares: z
    .array(z.any())
    .default([])
    .transform((arr) =>
      arr.filter((m): m is Handler => typeof m === 'function')
    ),
});

export type GatewayRouterOptions = z.infer<typeof GatewayRouterOptionsSchema>;
export type GatewayRouterOptionsInput = z.input<
  typeof GatewayRouterOptionsSchema
>;
export type GatewayRouterOptionsOutput = z.output<
  typeof GatewayRouterOptionsSchema
>;
