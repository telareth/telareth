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

purge_bun() {
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

  # Check if bun is installed and confirm with the user
  # Note: _iscmd has been corrected to _iscmd
  if ! _iscmd "bun"; then
    info "Bun is not installed. Ignoring purge request."
    return 0
  fi

  if ! _confirm "Bun is installed. Do you want to continue with the purge?" "$auto_yes"; then
    info "Purge cancelled by user."
    return 0
  fi

  info "Purging Bun..."

  # Remove Bun's installation directory
  _rmdir "$HOME/.bun"

  # Remove global Bun binary
  _rmfile "/usr/local/bin/bun" || true

  if ! _iscmd "grep sed"; then
   _install "grep sed" "$auto_yes"
  fi

  # Remove Bun lines from shell configs
  info "Removing Bun lines from shell configs..."
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      # A single, robust sed command to remove all Bun-related lines.
      # It removes lines containing BUN_INSTALL or references to _bun.
      # shellcheck disable=SC2016
      sed -i'' -e '/BUN_INSTALL/d' -e '/_bun/d' "$f" || true
    fi
  done

  info "Checking for leftovers..."
  if _iscmd "bun"; then
    warn "Bun still exists at: $(which "bun")"
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  else
    ok "Bun removed"
    ok "Purge completed successfully."
  fi
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the purge_bun function
  # This makes it possible to add a --yes flag
  purge_bun "$@"
  exit 0
fi
