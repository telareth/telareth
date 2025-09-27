import { z } from 'zod';

export const AccountEmailVerificationScalarFieldEnum = z.enum(['id', 'createdAt'])

export type AccountEmailVerificationScalarFieldEnum = z.infer<typeof AccountEmailVerificationScalarFieldEnum>;