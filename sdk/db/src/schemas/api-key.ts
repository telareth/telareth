import { z } from 'zod';

export const ApiKeySchema = z.object({
  id: z.uuid(),
  key: z.string(), // actual token/secret
  name: z.string().optional(), // human-friendly label
  expiresAt: z.iso.datetime().nullable().optional(),
  revoked: z.boolean().default(false),
  createdAt: z.iso.datetime(),
  lastUsedAt: z.iso.datetime().nullable().optional(),
  usageCount: z.number().default(0),
  serviceId: z.uuid(), // FK to Service
});

export type ApiKey = z.infer<typeof ApiKeySchema>;
export type ApiKeyInput = z.infer<typeof ApiKeySchema>;
export type ApiKeyOutput = z.infer<typeof ApiKeySchema>;
