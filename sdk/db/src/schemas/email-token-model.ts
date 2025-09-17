import { z } from 'zod';

export const EmailTokenModelSchema = z.object({
  adminId: z.uuid(),
  token: z.uuid(),
});

export type EmailTokenModel = z.infer<typeof EmailTokenModelSchema>;
export type EmailTokenModelInput = z.input<typeof EmailTokenModelSchema>;
export type EmailTokenModelOutput = z.output<typeof EmailTokenModelSchema>;
