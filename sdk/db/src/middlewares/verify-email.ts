import type { NextFunction, Request, Response } from 'express';
import { confirmEmail } from 'src/helpers/admin-email-confirm.js';

/**
 * Middleware to verify an admin's email verification token.
 *
 * Checks the token provided in the request body against the one stored in Redis.
 * If the token is valid, the admin's email is marked as verified and control
 * passes to the next middleware. Otherwise, a 400 error is returned.
 * @param req Express request object containing `adminId` and `token` in the body.
 * @param res Express response object to send error responses.
 * @param next Express next function to call the next middleware.
 */
export async function verifyEmailToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { adminId, token } = req.body;

  try {
    await confirmEmail(adminId, token);
    next();
  } catch (_err) {
    res.status(400).send({ error: 'Invalid or expired token' });
  }
}
