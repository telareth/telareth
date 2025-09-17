#!/usr/bin/env bash
set -euo pipefail

# Check if _core.sh exists before sourcing
if [ -f "$(dirname "${BASH_SOURCE[0]}")/_core.sh" ]; then
  # shellcheck disable=SC1091
  . "$(dirname "${BASH_SOURCE[0]}")/_core.sh"
else
  echo "Error: The core library (_core.sh) was not found. Please ensure it is in the same directory."
  exit 1
fi

purge_pnpm() {
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

  # Check if pnpm is installed and confirm with the user
  if ! _iscmd "pnpm"; then
    info "pnpm is not installed. Ignoring purge request."
    return 0
  fi

  if ! _confirm "pnpm is installed. Do you want to continue with the purge?" "$auto_yes"; then
    info "Purge cancelled by user."
    return 0
  fi

  info "Purging pnpm..."

  # Remove global pnpm packages
  info "Removing global pnpm packages..."
  local pnpm_global_root
  pnpm_global_root="$(pnpm root -g || true)"
  if [ -n "$pnpm_global_root" ]; then
    _rmdir "$pnpm_global_root"
  fi

  # Remove pnpm's store path
  _rmdir "$(pnpm store path || true)"

  # Remove the global pnpm CLI
  if _iscmd "npm"; then
    npm remove -g pnpm
  else
    warn "npm is not installed. Skipping 'npm remove' command."
  fi
  _rmdir "$PNPM_HOME" || true

  # Remove pnpm lines from shell configs
  info "Removing pnpm lines from shell configs..."
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      # A single, robust sed command to remove all pnpm-related lines
      # It removes any lines containing 'pnpm' in the context of PATH or a PNPM_HOME export.
      sed -i'' -e '/PNPM_HOME/d' -e '/pnpm/d' "$f" || true
    fi
  done

  info "Checking for leftovers..."
  if _iscmd "pnpm"; then
    warn "pnpm still exists at: $(which "pnpm")"
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  else
    ok "pnpm removed"
    ok "Purge completed successfully."
  fi
}

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  purge_pnpm "$@"
  exit 0
fi
