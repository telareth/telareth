import nx from '@nx/eslint-plugin';

import telareth from '@telareth/eslint-plugin';

export default [
  ...telareth.configs.ignores,
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  // ...telareth.configs.javascript,
  // ...telareth.configs.typescript,
  ...telareth.configs.json,
  ...telareth.configs.markdown,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
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
];
