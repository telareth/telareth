import { z } from 'zod';

import { ServerOptionsSchema } from './server.js';

export const GatewayOptionsSchema = z.object({
  server: ServerOptionsSchema,
});

export type GatewayOptions = z.infer<typeof GatewayOptionsSchema>;
export type RawGatewayOptions = z.input<typeof GatewayOptionsSchema>;
export type ParsedGatewayOptions = z.output<typeof GatewayOptionsSchema>;
