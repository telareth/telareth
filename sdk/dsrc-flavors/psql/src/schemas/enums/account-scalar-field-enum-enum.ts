import { z } from 'zod';

export const AccountScalarFieldEnum = z.enum(['id', 'createdAt', 'updatedAt', 'deletedAt', 'isActive', 'passwordId'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnum>;