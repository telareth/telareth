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

purge_node() {
  local auto_yes=""

  # Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes="-y"
      break
    fi
  done

  # Check if node is installed and confirm with the user
  if ! _iscmd "node"; then
    info "node is not installed. Ignoring purge request."
    return 0
  fi

  if ! _confirm "node is installed. Do you want to continue with the purge?" "$auto_yes"; then
    info "Purge cancelled by user."
    return 0
  fi

  info "Purging node..."

  # Purge related Node.js tools if they exist
  if _iscmd "yarn"; then
    _loadsh "purge-yarn"
    if _confirm "Yarn is installed. Do you want to purge it as well?" "$auto_yes"; then
      purge_yarn "$auto_yes"
    fi
  fi

  if _iscmd "pnpm"; then
    _loadsh "purge-pnpm"
    if _confirm "pnpm is installed. Do you want to purge it as well?" "$auto_yes"; then
      purge_pnpm "$auto_yes"
    fi
  fi

  if _iscmd "bun"; then
    _loadsh "purge-bun"
    if _confirm "bun is installed. Do you want to purge it as well?" "$auto_yes"; then
      purge_bun "$auto_yes"
    fi
  fi

  # Check if Node.js is installed via NVM
  if _iscmd "nvm"; then
    if _confirm "NVM is installed. Do you want to purge it as well?" "$auto_yes"; then
      info "Purging NVM..."
      _rmdir "$HOME/.nvm"
      for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
        if [ -f "$f" ]; then
          sed -i '' -e '/NVM_DIR/d' -e '/nvm.sh/d' -e '/bash_completion/d' "$f" || true
        fi
      done
      ok "NVM purged."
    fi
  fi

  # Remove npm global cache & config
  _rmdir "$HOME/.npm"
  _rmdir "$HOME/.config/npm"
  _rmdir "$HOME/.cache/npm"

  # Remove Node.js/npm installed via apt
  if _iscmd "apt"; then
    info "Removing Node.js and npm installed via apt..."
    sudo apt remove -y nodejs npm || true
    sudo apt purge -y nodejs npm || true
  fi

  # Remove global installations in /usr/local
  _rmdir "/usr/local/lib/node_modules"
  _rmfile "/usr/local/bin/node" || true
  _rmfile "/usr/local/bin/npm" || true
  _rmfile "/usr/local/bin/npx" || true

  info "Checking for leftovers..."
  local found_leftovers=false
  for bin in node npm npx nvm; do
    if _iscmd "$bin"; then
      warn "$bin still exists at: $(which "$bin")"
      found_leftovers=true
    else
      ok "$bin removed"
    fi
  done
  if [ "$found_leftovers" = false ]; then
    ok "Purge completed successfully."
  else
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  fi
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the purge_node function
  purge_node "$@"
  exit 0
fi
