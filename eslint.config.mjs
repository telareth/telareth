import { defineConfig, globalIgnores } from 'eslint/config';
import nx from '@nx/eslint-plugin';

import telareth from '@telareth/eslint-plugin';

export default defineConfig([
  globalIgnores(
    ['sdk/dsrc-flavors/**/src/dsrc/**', 'sdk/dsrc-flavors/**/src/schemas/**'],
    'Prisma generated content'
  ),
  ...telareth.configs.ignores,
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...telareth.configs.javascript,
  ...telareth.configs.typescript,
  ...telareth.configs.json,
  ...telareth.configs.markdown,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [String.raw`^.*/eslint(\.base)?\.config\.[cm]?[jt]s$`],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
]);
