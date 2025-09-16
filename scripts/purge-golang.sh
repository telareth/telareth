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

purge_golang() {
  local auto_yes=""
  local profile_file="${HOME}/.profile"
  # shellcheck disable=SC2016
  local path_export_line='export PATH=\$PATH:/usr/local/go/bin'

  # Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes="-y"
      break
    fi
  done

  info "PURGE GO LANG"

  if ! _iscmd "go"; then
    warn "Go is not currently installed. No action needed."
    return 0
  fi

  # Check for required commands
  if ! _iscmd "sudo"; then
    error "Sudo is not installed. Administrative privileges are required for this action."
    return 1
  fi

  if ! _iscmd "grep" || ! _iscmd "sed"; then
      error "grep or sed are not installed. These are required to edit your profile file."
      return 1
  fi

  if ! _confirm "Do you want to remove the Go installation from /usr/local/go and your PATH?" "$auto_yes"; then
    warn "Purge cancelled by user."
    return 0
  fi

  info "Removing Go installation from /usr/local/go"
  sudo rm -rf /usr/local/go || true

  info "Removing Go from your PATH in $profile_file"
  # Use grep -v to filter out the specific line and save to a temp file, then replace
  if grep -qxF "$path_export_line" "$profile_file"; then
      grep -vxF "$path_export_line" "$profile_file" > "${profile_file}.tmp"
      mv "${profile_file}.tmp" "$profile_file"
      ok "Removed Go from your PATH."
  else
      warn "Go path not found in $profile_file. No changes made."
  fi

  ok "Go installation has been successfully purged."
  warn "Please open a new terminal or run 'source $profile_file' to apply the changes."

  info "Verifying removal..."
  if ! _iscmd "go"; then
    ok "Go command is no longer found. Purge complete."
  else
    warn "Go command is still found. You may need to restart your terminal."
  fi
}

# This is the main entry point for the script
if [ "$#" -gt 0 ] && [ "$1" = "--run" ]; then
  purge_golang "$@"
fi
