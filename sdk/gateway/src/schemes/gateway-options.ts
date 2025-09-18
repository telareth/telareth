import { z } from 'zod';

import { PortSchema } from '@telareth/core';

export const GatewayOptionsSchema = z.object({
  GATEWAY_PORT: PortSchema,
});

export type GatewayOptions = z.infer<typeof GatewayOptionsSchema>;
export type GatewayOptionsInput = z.input<typeof GatewayOptionsSchema>;
export type GatewayOptionsOutput = z.output<typeof GatewayOptionsSchema>;
