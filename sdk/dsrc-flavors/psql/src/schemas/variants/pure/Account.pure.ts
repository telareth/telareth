import { z } from 'zod';

// prettier-ignore
export const AccountModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string()
}).strict();

export type AccountModelType = z.infer<typeof AccountModelSchema>;
