import { z } from 'zod';

// prettier-ignore
export const AccountInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string()
}).strict();

export type AccountInputType = z.infer<typeof AccountInputSchema>;
