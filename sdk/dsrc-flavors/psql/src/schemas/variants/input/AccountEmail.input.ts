import { z } from 'zod';

// prettier-ignore
export const AccountEmailInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().optional().nullable(),
    accountId: z.string().optional().nullable(),
    verification: z.unknown().optional().nullable(),
    verificationId: z.string().optional().nullable()
}).strict();

export type AccountEmailInputType = z.infer<typeof AccountEmailInputSchema>;
