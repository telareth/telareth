import { z } from 'zod';

export const MIDDLEWARE_NAME_REGEX = /^[a-z][a-z0-9-]*[a-z0-9]$/;

export const MiddlewareModelSchema = z.object({
  id: z.uuid(),
  name: z.string().regex(MIDDLEWARE_NAME_REGEX), // e.g. "auth", "rate-limit"
  config: z.json().nullable().optional(), // JSON config
  serviceId: z.uuid(), // FK to Service
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type MiddlewareModel = z.infer<typeof MiddlewareModelSchema>;
export type MiddlewareModelInput = z.infer<typeof MiddlewareModelSchema>;
export type MiddlewareModelOutput = z.infer<typeof MiddlewareModelSchema>;
