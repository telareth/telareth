import { z } from 'zod';

// prettier-ignore
export const AccountEmailVerificationInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().optional().nullable()
}).strict();

export type AccountEmailVerificationInputType = z.infer<typeof AccountEmailVerificationInputSchema>;
