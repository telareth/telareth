import { randomUUID } from 'crypto';

import bcrypt from 'bcryptjs';

import { TABLES } from '../../consts.js';
import { sendVerificationEmail } from '../../helpers/admin-email-send.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Creates a new admin entry in Redis with hashed password and email verification.
 *
 * Generates a verification token, stores it in Redis for 24h, and sends a
 * verification email to the admin.
 * @param data The object containing the admin information to save.
 * @returns The newly created admin object.
 */
export async function createAdmin(
  data: Omit<Admin, 'id' | 'createdAt' | 'updatedAt' | 'roles'>
): Promise<Admin> {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const admin: Admin = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    roles: ['ADMIN'], // default role
    ...data,
    password: hashedPassword,
  };

  const parsed = AdminSchema.parse(admin);
  await redis.hSet(TABLES.ADMINS, parsed.id, JSON.stringify(parsed));

  // Generate email verification token
  const emailToken = randomUUID();
  await redis.set(
    `${TABLES.EMAIL_VERIFICATION_PREFIX}${parsed.id}`,
    emailToken,
    {
      EX: 60 * 60 * 24, // 24h expiry
    }
  );

  // Send verification email
  await sendVerificationEmail(parsed, emailToken);

  return parsed;
}
