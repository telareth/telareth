/**
 * Get the right client according to the provider defined in process.env.DATABASE_PROVIDER.
 * @param provider The DATABASE PROVIDER.
 */
export async function getClient(provider?: string) {
  const dbProvider = provider || process.env.DATABASE_PROVIDER;
  if (!dbProvider) {
    throw new Error(
      'DATABASE_PROVIDER is not defined and no provider was passed'
    );
  }

  const pkgName = `@telareth/dsrc-${dbProvider}`;
  const imported = await import(pkgName);

  if (!imported.createClient) {
    throw new Error(`Flavor "${pkgName}" does not export createClient()`);
  }

  return imported.createClient();
}
