import { z } from 'zod';

// prettier-ignore
export const AccountEmailResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().nullable(),
    accountId: z.string().nullable(),
    verification: z.unknown().nullable(),
    verificationId: z.string().nullable()
}).strict();

export type AccountEmailResultType = z.infer<typeof AccountEmailResultSchema>;
