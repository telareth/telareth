import bcrypt from 'bcryptjs';
import { TABLES } from 'src/consts.js';
import { redis } from 'src/helpers/redis-client.js';
import { AdminSchema } from 'src/schemas/admin.js';

import { getAdminById } from '../admin/get-by-id.js';

/**
 * Update admin password.
 * // TODO: add better account verification (2FA/OTP) before updating.
 * @param adminId The UUID string representing the admin.
 * @param oldPassword The non-hashed old password to compare.
 * @param newPassword The non-hashed new passwword.
 */
export async function updatePassword(
  adminId: string,
  oldPassword: string,
  newPassword: string
) {
  // TODO: Existing old-password verification
  const adminRaw = await getAdminById(adminId); // load admin

  if (!adminRaw) throw new Error('User not found');

  // TODO: implement 2FA verification
  const match = await bcrypt.compare(oldPassword, adminRaw.password);
  if (!match) throw new Error('Old password does not match');

  // Hash the new password
  const hashed = await bcrypt.hash(newPassword, 10);

  // Save changes
  const newAdmin = { ...adminRaw, password: hashed };
  const parsed = AdminSchema.parse(newAdmin);
  await redis.hSet(TABLES.ADMINS, parsed.id, JSON.stringify(parsed));

  return parsed;
}
