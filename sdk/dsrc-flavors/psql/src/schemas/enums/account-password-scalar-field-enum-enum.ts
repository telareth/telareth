import { z } from 'zod';

export const AccountPasswordScalarFieldEnum = z.enum(['id', 'createdAt', 'updatedAt', 'password'])

export type AccountPasswordScalarFieldEnum = z.infer<typeof AccountPasswordScalarFieldEnum>;