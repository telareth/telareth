import { z } from 'zod';

// prettier-ignore
export const AccountPasswordResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().nullable()
}).strict();

export type AccountPasswordResultType = z.infer<typeof AccountPasswordResultSchema>;
