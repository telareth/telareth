import { z } from 'zod';

export const ApiKeySchema = z.union([
  z.hash('md5'),
  z.hash('sha1'),
  z.hash('sha256'),
  z.hash('sha384'),
  z.hash('sha512'),
  z.string(),
]);

export const ApiKeyModelSchema = z.object({
  id: z.uuid(),
  key: ApiKeySchema, // actual token/secret
  name: z.string().nullable().optional(), // human-friendly label
  expiresAt: z.iso.datetime().nullable().optional(),
  revoked: z.boolean().default(false),
  createdAt: z.iso.datetime(),
  lastUsedAt: z.iso.datetime().nullable().optional(),
  usageCount: z.number().default(0),
  serviceId: z.uuid(), // FK to ServiceModel.id
});

export type ApiKey = z.infer<typeof ApiKeySchema>;
export type ApiKeyInput = z.input<typeof ApiKeySchema>;
export type ApiKeyOutput = z.output<typeof ApiKeySchema>;

export type ApiKeyModel = z.infer<typeof ApiKeyModelSchema>;
export type ApiKeyModelInput = z.infer<typeof ApiKeyModelSchema>;
export type ApiKeyModelOutput = z.infer<typeof ApiKeyModelSchema>;
