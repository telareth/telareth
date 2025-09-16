import { z } from 'zod';

export const EmailVerificationSchema = z.object({
  adminId: z.uuid(),
  token: z.uuid(),
});

export type EmailVerification = z.infer<typeof EmailVerificationSchema>;
export type EmailVerificationInput = z.input<typeof EmailVerificationSchema>;
export type EmailVerificationOutput = z.output<typeof EmailVerificationSchema>;
