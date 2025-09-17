import { z } from 'zod';

export const ServiceModelSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().optional(),
  origin: z.url(),
  prefix: z.string(),
  active: z.boolean().default(false),
  apiKeys: z.uuid(), // FK ApiKeyModel.id
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type ServiceModel = z.infer<typeof ServiceModelSchema>;
export type ServiceModelInput = z.infer<typeof ServiceModelSchema>;
export type ServiceModelOutput = z.infer<typeof ServiceModelSchema>;
