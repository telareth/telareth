import z from 'zod';

// SECRET_KEY
export const SecretKeySchema = z.union([
  z.hash('md5'),
  z.hash('sha1'),
  z.hash('sha256'),
  z.hash('sha384'),
  z.hash('sha512'),
  z
    .string('Invalid SECREY_KEY: must be a string with at least 12 chars.')
    .min(12),
]);

export type SecretKey = z.infer<typeof SecretKeySchema>;
export type SecretKeyInput = z.input<typeof SecretKeySchema>;
export type SecretKeyOutput = z.output<typeof SecretKeySchema>;

export const SECRET_KEY: SecretKeyOutput = SecretKeySchema.parse(
  process.env.SECRET_KEY
);

// JWT_SECRET
export const JWTSecretSchema = z.union([
  z.hash('md5'),
  z.hash('sha1'),
  z.hash('sha256'),
  z.hash('sha384'),
  z.hash('sha512'),
  z
    .string('Invalid JWT_TOKEN: must be a string with at least 12 chars.')
    .min(12),
]);

export type JWTSecret = z.infer<typeof JWTSecretSchema>;
export type JWTSecretInput = z.input<typeof JWTSecretSchema>;
export type JWTSecretOutput = z.output<typeof JWTSecretSchema>;

export const JWT_SECRET: JWTSecretOutput = JWTSecretSchema.parse(
  process.env.JWT_SECRET ?? process.env.SECRET_KEY
);

// JWT_EXPIRES_IN
export const JWTExpiresInSchema = z
  .string("Invalid JWT_EXPIRES_IN. Example: '1h'")
  .default('1h');

export type JWTExpiresIn = z.infer<typeof JWTExpiresInSchema>;
export type JWTExpiresInInput = z.input<typeof JWTExpiresInSchema>;
export type JWTExpiresInOutput = z.output<typeof JWTExpiresInSchema>;

export const JWT_EXPIRES_IN = JWTExpiresInSchema.parse(
  process.env.JWT_EXPIRES_IN
);
