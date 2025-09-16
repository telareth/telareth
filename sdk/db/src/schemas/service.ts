import { z } from 'zod';

export const ServiceSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().optional(),
  origin: z.url(),
  prefix: z.string(),
  active: z.boolean().default(false),
  apiKey: z.string(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Service = z.infer<typeof ServiceSchema>;
export type ServiceInput = z.infer<typeof ServiceSchema>;
export type ServiceOutput = z.infer<typeof ServiceSchema>;
