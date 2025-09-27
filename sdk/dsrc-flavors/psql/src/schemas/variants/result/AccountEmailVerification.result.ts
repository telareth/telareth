import { z } from 'zod';

// prettier-ignore
export const AccountEmailVerificationResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().nullable()
}).strict();

export type AccountEmailVerificationResultType = z.infer<typeof AccountEmailVerificationResultSchema>;
