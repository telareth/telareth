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

purge_yarn() {
  local auto_yes=""

  # Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes="-y"
      break
    fi
  done

  # First check for yarn installation and ask for confirmation.
  if ! _iscmd "yarn"; then
    info "Yarn is not installed. Ignoring purge request."
    return 0
  fi

  if ! _confirm "Yarn is installed. Do you want to continue with the purge?" "$auto_yes"; then
    info "Purge cancelled by user."
    return 0
  fi

  info "Purging Yarn..."

  # Remove Yarn caches and configs
  _rmdir "$HOME/.yarn"
  _rmfile "$HOME/.yarnrc" || true
  _rmfile "$HOME/.yarnrc.yml" || true
  _rmdir "$HOME/.cache/yarn"
  _rmdir "$HOME/.local/share/yarn"
  _rmdir "$HOME/.config/yarn"

  # Uninstalling yarn from global npm packages
  if _iscmd "npm"; then
    npm remove -g yarn
  else
    warn "npm is not installed. Skipping 'npm remove' command."
  fi

  # Remove Yarn installed via apt
  if _iscmd "apt"; then
    info "Removing Yarn installed via apt..."
    sudo apt remove -y yarn || true
    sudo apt purge -y yarn || true
    sudo apt autoremove -y || true
  fi

  # Remove global Yarn binaries
  _rmfile "/usr/local/bin/yarn" || true
  _rmfile "/usr/local/bin/yarnpkg" || true

  # Remove Yarn lines from shell configs
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      # This sed command is more robust. It removes lines containing 'yarn'
      # in the context of PATH or a sourcing command.
      # shellcheck disable=SC2016
      sed -i '' -e '/export PATH=.*yarn.*/d' -e '/source.*yarn.*/d' "$f" || true
      # It also removes old-style yarn exports that might still be present.
      sed -i '' -e '/yarn\//d' "$f" || true
    fi
  done

  info "Checking for leftovers..."
  local found_leftovers=false
  for bin in yarn yarnpkg; do
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
  # Pass all arguments ($@) to the purge_yarn function
  # This makes it possible to add a --yes flag in the future
  purge_yarn "$@"
  exit 0
fi
