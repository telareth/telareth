import z from 'zod';

import type {
  GatewayRouterOptionsInput,
  GatewayRouterOptionsOutput,
} from '../schemas/gateway-router-options.js';
import { GatewayRouterOptionsSchema } from '../schemas/gateway-router-options.js';

/**
 * Safely parses user-defined gateway router options against the schema.
 * - Returns normalized options if valid.
 * - Logs an error with route context and returns `null` if invalid.
 *
 * This ensures the application continues running; invalid routes are skipped.
 * @param options Unvalidated user options (e.g. From a constructor).
 * @returns Validated options or `null` if invalid.
 */
export function parseGatewayRouterOptions(
  options: GatewayRouterOptionsInput
): GatewayRouterOptionsOutput | null {
  const result = GatewayRouterOptionsSchema.safeParse(options);

  if (!result.success) {
    console.warn(`[WARN] Couldn't create a router.`);

    const pretty = z.prettifyError(result.error);
    console.warn(pretty);

    return null;
  }

  return result.data;
}
