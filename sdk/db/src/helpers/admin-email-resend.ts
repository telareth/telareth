import crypto from 'crypto';

import { TABLES } from '../consts.js';
import type { Admin } from '../schemas/admin.js';
import { sendVerificationEmail } from './admin-email-send.js';
import { redis } from './redis-client.js';

/**
 * Re-triggers the email verification process for an admin.
 *
 * Generates a new verification token, stores it in Redis (24h),
 * resets `emailVerified` to false, and sends the email.
 * @param admin The admin object.
 * @returns The generated verification token (useful for testing).
 */
export async function resendVerificationEmail(admin: Admin): Promise<string> {
  // Generate new token
  const token = crypto.randomUUID();

  // Store token in Redis (24h expiration)
  await redis.set(`${TABLES.EMAIL_VERIFICATION_PREFIX}${admin.id}`, token, {
    EX: 60 * 60 * 24,
  });

  // Reset emailVerified to false
  admin.emailVerified = false;

  // Send email via helper
  await sendVerificationEmail(admin, token);

  return token;
}
