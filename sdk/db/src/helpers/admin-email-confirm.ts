import { TABLES } from '../consts/table.js';
import { updateAdmin } from '../queries/admin/update.js';
import { redis } from './redis-client.js';

/**
 * Confirms the admin's email by validating the token.
 * @param adminId The UUID of the admin.
 * @param token The token sent to the admin's email.
 */
export async function confirmEmail(adminId: string, token: string) {
  const storedToken = await redis.get(
    `${TABLES.EMAIL_VERIFICATION_PREFIX}${adminId}`
  );
  if (!storedToken || storedToken !== token)
    throw new Error('Invalid verification token');

  // Mark email as verified
  const updatedAdmin = await updateAdmin(adminId, { emailVerified: true });

  // Remove token from Redis
  await redis.del(`${TABLES.EMAIL_VERIFICATION_PREFIX}${adminId}`);

  return updatedAdmin;
}
