import { z } from 'zod';

// prettier-ignore
export const AccountEmailVerificationModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().nullable()
}).strict();

export type AccountEmailVerificationModelType = z.infer<typeof AccountEmailVerificationModelSchema>;
