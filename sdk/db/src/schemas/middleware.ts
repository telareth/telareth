import { z } from 'zod';

export const MiddlewareSchema = z.object({
  id: z.uuid(),
  name: z.string(), // e.g. "auth", "rate-limit"
  config: z.record(z.string(), z.unknown()).nullable().optional(), // JSON config
  serviceId: z.uuid(), // FK to Service
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Middleware = z.infer<typeof MiddlewareSchema>;
export type MiddlewareInput = z.infer<typeof MiddlewareSchema>;
export type MiddlewareOutput = z.infer<typeof MiddlewareSchema>;
