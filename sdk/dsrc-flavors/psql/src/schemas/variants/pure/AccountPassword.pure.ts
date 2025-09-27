import { z } from 'zod';

// prettier-ignore
export const AccountPasswordModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().nullable()
}).strict();

export type AccountPasswordModelType = z.infer<typeof AccountPasswordModelSchema>;
