#!/usr/bin/env bash
set -euo pipefail

# Check if _core.sh exists before sourcing
if [ -f "$(dirname "${BASH_SOURCE[0]}")/_core.sh" ]; then
  # shellcheck disable=SC1091
  . "$(dirname "${BASH_SOURCE[0]}")/_core.sh"
else
  # Fallback message if the core library is missing
  echo "Error: The core library (_core.sh) was not found. Please ensure it is in the same directory."
  exit 1
fi

# A local function to remove existing ESLint packages and config files.
purge_eslint() {
  info "Purging existing ESLint installations..."
  if _iscmd "npm"; then
    npm uninstall -g eslint || true
  else
    warn "npm not found. Cannot automatically uninstall packages."
  fi
}

# setup_eslint - Installs ESLint and its plugins.
#
# Usage:
# setup_eslint
# setup_eslint --yes
setup_eslint() {
  local auto_yes=""

  # Check for the --yes flag passed to the script
  for arg in "$@"; do
    if [ "$arg" == "--yes" ]; then
      auto_yes="--yes"
      break
    fi
  done

  # Check for existing installation and prompt for re-install
  if _iscmd "eslint"; then
    if _confirm "ESLint is already installed. Do you want to force re-install?" "$auto_yes"; then
      purge_eslint
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js and npm as a prerequisite
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required for ESLint."
    if _confirm "Do you want to install Node.js (via NVM)?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    else
      info "Node.js installation canceled. Cannot proceed."
      return 0
    fi
  fi

  # Verify npm is available after the potential Node.js installation
  if ! _iscmd "npm"; then
    error "npm is not available. Cannot install ESLint."
    return 1
  fi

  info "Installing ESLint and its plugins globally and locally..."
  npm install -g eslint@latest
  npm install --save-dev eslint@latest @telareth/eslint-plugin@latest

  warn "Removing eventual old ESLint configuration files"
  _rmfile ".eslintrc.js" || true
  _rmfile ".eslintrc.cjs" || true
  _rmfile ".eslintrc.mjs" || true
  _rmfile ".eslintrc.yaml" || true
  _rmfile ".eslintrc.yml" || true
  _rmfile ".eslintrc.json" || true
  _rmfile "eslint.config.js" || true
  _rmfile "eslint.config.cjs" || true
  _rmfile "eslint.config.mjs" || true
  _rmfile "eslint.config.ts" || true
  _rmfile "eslint.config.cts" || true
  _rmfile "eslint.config.mts" || true

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
}

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  setup_eslint "$@"
  exit 0
fi
