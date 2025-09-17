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

# Load the purge-bun function from the purge-bun script
# This is a one-off action for this script.
_loadsh "purge-bun"

# install_bun - Installs the Bun runtime.
#
# Usage:
# install_bun
# install_bun --yes
install_bun() {
  local shell_name
  local rc_file
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

  shell_name=$(basename "$SHELL")
  rc_file="$HOME/.${shell_name}rc"

  # Check for existing Bun installation and prompt for re-install
  if _iscmd "bun"; then
    if _confirm "Bun is already installed. Do you want to force re-install it?" "$auto_yes"; then
      purge_bun
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js installation and prompt to install it if missing.
  if ! _iscmd "node"; then
    warn "Node.js is not installed. Many packages rely on it, even when using Bun."
    if _confirm "Do you want to install Node.js (via NVM) as well?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    fi
  fi

  info "Installing Bun..."

  # Check if curl is installed, install it otherwise.
  if ! _iscmd "curl"; then
    warn "curl is not installed. Installing it to proceed with Bun installation..."
    _install "curl" "$auto_yes"
  fi

  # Install Bun using the official script.
  curl -fsSL https://bun.sh/install | bash

  # shellcheck disable=SC2016
  local bun_lines=(
    'export BUN_INSTALL="$HOME/.bun"'
    'export PATH="$BUN_INSTALL/bin:$PATH"'
    '[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"'
  )

  # Check and add Bun configuration lines to the shell profile
  local already_configured=false
  # Use grep with -q to quietly check for any of the lines
  if grep -q 'BUN_INSTALL' "$rc_file"; then
    already_configured=true
  fi
  if ! "$already_configured"; then
    info "Adding Bun lines to $rc_file"
    for line in "${bun_lines[@]}"; do
      printf "%s\n" "$line" >> "$rc_file"
    done
    ok "Bun lines added."
  else
    warn "Bun lines already found in $rc_file. Skipping."
  fi

  # Re-evaluate Bun's configuration lines to update the current shell's PATH
  for line in "${bun_lines[@]}"; do
    eval "$line"
  done

  ok "Setup Complete"
  info "Bun version: $(bun -v)"
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the install_bun function
  # This makes the --yes flag work when running the script directly
  install_bun "$@"
  exit 0
fi
