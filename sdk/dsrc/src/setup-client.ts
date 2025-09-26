// @telareth/dsrc setup-client.ts
import type { Constructor, IDsrcClient } from '@telareth/common';
import { applyMixins, BaseDsrcClient } from '@telareth/common';

/**
 * Dynamically load the right DsrcClient according to provider.
 * Mixes in BaseDsrcClient logic to ensure shared methods are available.
 * @param provider Optional override for DATABASE_PROVIDER.
 * @returns An instance of the provider-specific DsrcClient with BaseDsrcClient mixins applied.
 */
export async function setupClient(provider?: string): Promise<IDsrcClient> {
  const dbProvider = provider || process.env.DATABASE_PROVIDER;
  if (!dbProvider) {
    throw new Error(
      'DATABASE_PROVIDER is not defined and no provider was passed'
    );
  }

  const pkgName = `@telareth/dsrc-${dbProvider}`;
  const importedPkg = await import(pkgName);
  const { DsrcClient } = importedPkg;

  if (!DsrcClient) {
    throw new Error(`Flavor "${pkgName}" does not export DsrcClient`);
  }

  // Ensure BaseDsrcClient methods are mixed in
  applyMixins(DsrcClient as Constructor, [BaseDsrcClient as Constructor]);

  return new DsrcClient();
}
