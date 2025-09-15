#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-file.sh"

info "Installing eslint"

npm install -g eslint@latest
npm install --save-dev eslint@latest
npm install --save-dev @telareth/eslint-plugin@latest

warn "Removing evetual old ESLint configuration files"
rm_file ".eslintrc.js" || true
rm_file ".eslintrc.cjs" || true
rm_file ".eslintrc.mjs" || true
rm_file ".eslintrc.yaml" || true
rm_file ".eslintrc.yml" || true
rm_file ".eslintrc.json" || true
rm_file "eslint.config.js" || true
rm_file "eslint.config.cjs" || true
rm_file "eslint.config.mjs" || true
rm_file "eslint.config.ts" || true
rm_file "eslint.config.cts" || true
rm_file "eslint.config.mts" || true

info "Generating ESLint configuration file"
cat > eslint.config.mjs <<'EOM'
import nx from '@nx/eslint-plugin';

import telareth from '@telareth/eslint-plugin';

export default [
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
EOM

ok "ESLint setup complete. Generated eslint.config.mjs"
