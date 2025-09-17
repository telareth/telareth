#!/usr/bin/env bash
set -euo pipefail

# Check if _core.sh exists before sourcing
# This prevents an error if the script is run from an unexpected location.
if [ -f "$(dirname "${BASH_SOURCE[0]}")/_core.sh" ]; then
  # shellcheck disable=SC1091
  . "$(dirname "${BASH_SOURCE[0]}")/_core.sh"
else
  # Fallback message if the core library is missing
  echo "Error: The core library (_core.sh) was not found. Please ensure it is in the same directory."
  exit 1
fi

# A simple local function to remove figlet, as there is no specific script for it.
purge_figlet() {
    info "Purging existing figlet installation..."
    if _iscmd "npm"; then
        npm uninstall -g figlet || true
    else
        warn "npm not found. Cannot automatically uninstall figlet."
    fi
}

# install_figlet - Installs the figlet runtime.
#
# Usage:
# install_figlet
# install_figlet --yes
install_figlet() {
  local auto_yes=""

  # parse args
  while [ $# -gt 0 ]; do
    case "$1" in
      -y|--yes)
        auto_yes="-y"
        shift
        ;;
      --run)
        shift
        ;;
      *)
        shift
        ;;
    esac
  done

  # Check if figlet is installed first.
  if _iscmd "figlet"; then
    if _confirm "figlet is already installed. Do you want to force re-install it?" "$auto_yes"; then
      purge_figlet
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js installation and prompt to install it if missing.
  if ! _iscmd "node"; then
    warn "Node.js is not installed. Many packages rely on it, even when using figlet."
    if _confirm "Do you want to install Node.js (via NVM) as well?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    fi
  fi

  # Now check if npm is available after the potential Node.js installation.
  if ! _iscmd "npm"; then
    error "npm is not available. Cannot install figlet."
    return 1
  fi

  info "Installing figlet..."
  npm install -g figlet@latest || {
    error "Failed to install figlet via npm."
    return 1
  }

  ok "Setup Complete"
  info "figlet version: $(figlet -v)"
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the install_figlet function
  # This makes the --yes flag work when running the script directly
  install_figlet "$@"
  exit 0
fi
