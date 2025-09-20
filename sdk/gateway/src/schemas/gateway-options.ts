import { z } from 'zod';

import { AppOptionsSchema } from '@telareth/server/schemas';

export const GatewayOptionsSchema = AppOptionsSchema.extend({})
  .optional()
  .default({
    name: 'gateway',
    port: 4000,
  });

export type GatewayOptions = z.infer<typeof GatewayOptionsSchema>;
export type RawGatewayOptions = z.input<typeof GatewayOptionsSchema>;
export type ParsedGatewayOptions = z.output<typeof GatewayOptionsSchema>;
