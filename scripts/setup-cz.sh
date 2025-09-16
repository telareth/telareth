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

# A local function to remove existing Commitizen and Commitlint packages.
purge_commitizen() {
  info "Purging existing Commitizen and Commitlint installations..."
  if _iscmd "npm"; then
    npm uninstall -g commitizen || true
    npm uninstall -D commitizen @commitlint/cli @commitlint/config-conventional || true
  else
    warn "npm not found. Cannot automatically uninstall packages."
  fi
}

# setup_cz - Installs Commitizen and Commitlint.
#
# Usage:
# setup_cz
# setup_cz --yes
setup_cz() {
  local auto_yes=""

  # Check for the --yes flag passed to the script
  for arg in "$@"; do
    if [ "$arg" == "--yes" ]; then
      auto_yes="--yes"
      break
    fi
  done

  # Check for existing installation and prompt for re-install
  if _iscmd "commitizen" || _iscmd "commitlint"; then
    if _confirm "Commitizen or Commitlint are already installed. Do you want to force re-install?" "$auto_yes"; then
      purge_commitizen
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js and npm as a prerequisite
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required for Commitizen and Commitlint."
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
    error "npm is not available. Cannot install Commitizen and Commitlint."
    return 1
  fi

  info "Installing commitizen: the cz-cli, and commitlint"
  npm install -g commitizen@latest
  npm install --save-dev commitizen@latest

  info "Making the repository commitizen-friendly"
  npx commitizen init cz-conventional-changelog --save-dev --save-exact --force

  info "Installing commitlint"
  npm install -D @commitlint/cli @commitlint/config-conventional

  warn "Removing eventual old Commitlint configuration files"
  _rmfile ".commitlintrc" || true
  _rmfile ".commitlintrc.json" || true
  _rmfile ".commitlintrc.yaml" || true
  _rmfile ".commitlintrc.yml" || true
  _rmfile ".commitlintrc.js" || true
  _rmfile ".commitlintrc.cjs" || true
  _rmfile ".commitlintrc.mjs" || true
  _rmfile ".commitlintrc.ts" || true
  _rmfile ".commitlintrc.cts" || true
  _rmfile "commitlint.config.js" || true
  _rmfile "commitlint.config.cjs" || true
  _rmfile "commitlint.config.mjs" || true
  _rmfile "commitlint.config.ts" || true
  _rmfile "commitlint.config.cts" || true

  info "Generating Commitlint configuration file"
  cat > commitlint.config.mjs <<'EOM'
export default { extends: ['@commitlint/config-conventional'] };
EOM

  ok "Commitizen and Commitlint setup complete. Generated commitlint.config.mjs"
}

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  setup_cz "$@"
  exit 0
fi
