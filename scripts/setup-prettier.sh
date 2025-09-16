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

# A local function to remove existing Prettier packages and config files.
purge_prettier() {
  info "Purging existing Prettier installations..."
  if _iscmd "npm"; then
    npm uninstall -g prettier || true
  else
    warn "npm not found. Cannot automatically uninstall packages."
  fi
}

# setup_prettier - Installs Prettier and its configuration.
#
# Usage:
# setup_prettier
# setup_prettier --yes
setup_prettier() {
  local auto_yes=""

  # Check for the --yes flag passed to the script
  for arg in "$@"; do
    if [ "$arg" == "--yes" ]; then
      auto_yes="--yes"
      break
    fi
  done

  # Check for existing installation and prompt for re-install
  if _iscmd "prettier"; then
    if _confirm "Prettier is already installed. Do you want to force re-install?" "$auto_yes"; then
      purge_prettier
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js and npm as a prerequisite
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required for Prettier."
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
    error "npm is not available. Cannot install Prettier."
    return 1
  fi

  info "Installing prettier globally and locally..."
  npm install -g prettier@latest
  npm install --save-dev --save-exact prettier@latest
  npm install --save-dev @telareth/prettier-config@latest

  info "Removing eventual old Prettier configuration files"
  _rmfile ".prettierrc" || true
  _rmfile ".prettierrc.json" || true
  _rmfile ".prettierrc.yml" || true
  _rmfile ".prettierrc.yaml" || true
  _rmfile ".prettierrc.json5" || true
  _rmfile ".prettierrc.js" || true
  _rmfile "prettier.config.js" || true
  _rmfile ".prettierrc.ts" || true
  _rmfile "prettier.config.ts" || true
  _rmfile ".prettierrc.mjs" || true
  _rmfile "prettier.config.mjs" || true
  _rmfile ".prettierrc.mts" || true
  _rmfile "prettier.config.mts" || true
  _rmfile ".prettierrc.cjs" || true
  _rmfile "prettier.config.cjs" || true
  _rmfile ".prettierrc.cts" || true
  _rmfile "prettier.config.cts" || true
  _rmfile ".prettierrc.toml" || true

  info "Generating new Prettier configuration file"
  cat > .prettierrc.mjs <<'EOM'
import telarethPrettierConfig from '@telareth/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @typedef {import("prettier").Config}
 */
const config = {
  ...telarethPrettierConfig,
};

export default config;
EOM

  info "Generating .prettierignore file"
  _rmfile ".prettierignore" || true
  cat > .prettierignore <<'EOM'
dist
/coverage
/.nx/cache
/.nx/workspace-data
EOM

  ok "Prettier setup complete. Generated .prettierrc.mjs and .prettierignore"
}

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  setup_prettier "$@"
  exit 0
fi
