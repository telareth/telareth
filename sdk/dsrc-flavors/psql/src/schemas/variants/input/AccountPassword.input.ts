import { z } from 'zod';

// prettier-ignore
export const AccountPasswordInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().optional().nullable()
}).strict();

export type AccountPasswordInputType = z.infer<typeof AccountPasswordInputSchema>;
