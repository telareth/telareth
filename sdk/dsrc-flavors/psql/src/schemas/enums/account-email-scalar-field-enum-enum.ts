import { z } from 'zod';

export const AccountEmailScalarFieldEnum = z.enum(['id', 'createdAt', 'updatedAt', 'email', 'isPrimary', 'accountId', 'verificationId'])

export type AccountEmailScalarFieldEnum = z.infer<typeof AccountEmailScalarFieldEnum>;