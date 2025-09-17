import crypto from 'crypto';

import { TABLES } from '../../consts/table.js';
import { sendVerificationEmail } from '../../helpers/admin-email-send.js';
import { redis } from '../../helpers/redis-client.js';
import type { Admin } from '../../schemas/admin.js';
import { AdminSchema } from '../../schemas/admin.js';

/**
 * Updates fields of an existing admin (email and roles only).
 * Password must be updated via auth/password-update.ts.
 *
 * Generates a new verification token if the email changes, resets
 * emailVerified to false, and sends a verification email.
 * @param id The UUID representing the admin.
 * @param updates The object containing the updates to save.
 * @returns The updated admin object.
 */
export async function updateAdmin(
  id: string,
  updates: Partial<Omit<Admin, 'id' | 'createdAt' | 'password'>>
): Promise<Admin> {
  const existingRaw = await redis.hGet(TABLES.ADMINS, id);
  if (!existingRaw) throw new Error('User not found');

  const existing: Admin = JSON.parse(existingRaw);

  // Prevent password changes here
  if ('password' in updates) {
    delete updates.password;
  }

  // Handle email changes
  if (updates.email) {
    updates.emailVerified = false; // reset verification
    const emailToken = crypto.randomUUID();
    await redis.set(`${TABLES.EMAIL_VERIFICATION_PREFIX}${id}`, emailToken, {
      EX: 60 * 60 * 24, // 24h expiry
    });
    await sendVerificationEmail(
      { id, email: updates.email } as Admin,
      emailToken
    );
  }

  const updated: Admin = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const parsed = AdminSchema.parse(updated);
  await redis.hSet(TABLES.ADMINS, parsed.id, JSON.stringify(parsed));

  return parsed;
}
