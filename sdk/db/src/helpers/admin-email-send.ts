import type { Admin } from '../schemas/admin.js';

/**
 * Sends an email verification link to the admin.
 * @param admin The admin object containing email and id.
 * @param token The verification token generated for this admin.
 */
export async function sendVerificationEmail(admin: Admin, token: string) {
  // TODO: implement actual email sending
  // For example, via SMTP, SendGrid, or other email provider
  console.log(`Send verification email to ${admin.email} with token: ${token}`);
}
