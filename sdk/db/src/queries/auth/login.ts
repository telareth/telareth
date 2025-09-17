import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_EXPIRES_IN, JWT_SECRET } from '../../consts/security.js';
import { TABLES } from '../../consts/table.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Authenticate an admin and return JWT token.
 * @param email Admin email.
 * @param password Admin password.
 * @returns JWT token and admin object.
 */
export async function login(
  email: string,
  password: string
): Promise<{ token: string; admin: Admin }> {
  const entries = await redis.hVals(TABLES.ADMINS);
  const admin = entries
    .map((e) => AdminSchema.parse(JSON.parse(e)))
    .find((a) => a.email === email);

  if (!admin) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, admin.password);
  if (!match) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: admin.id, roles: admin.roles }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return { token, admin };
}
