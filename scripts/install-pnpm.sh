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

install_pnpm() {
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

  # Corrected logical flow: Check if pnpm is already installed.
  if _iscmd "pnpm"; then
    if _confirm "pnpm is already installed. Do you want to force re-install it?" "$auto_yes"; then
      _loadsh "purge-pnpm"
      purge_pnpm "$auto_yes"
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check if Node.js is installed. It's required for pnpm.
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required to run pnpm."
    if _confirm "Do you want to install Node.js (via NVM)?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    else
      info "Node.js installation canceled. Cannot proceed with pnpm installation."
      return 0
    fi
  fi

  info "Installing pnpm..."

  # Check if curl is installed, install it if not.
  if ! _iscmd "curl"; then
    warn "curl is not installed. Installing it to proceed with pnpm installation..."
    _install "curl" "$auto_yes"
  fi

  # Install pnpm using the official script.
  curl -fsSL https://get.pnpm.io/install.sh | sh -

  # Verify the installation and report version
  if _iscmd "pnpm"; then
    ok "pnpm installed successfully."
    info "pnpm version: $(pnpm -v)"
  else
    error "pnpm installation failed. Manual intervention may be required."
    return 1
  fi
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the install_pnpm function
  # This makes the --yes flag work when running the script directly
  install_pnpm "$@"
  exit 0
fi
