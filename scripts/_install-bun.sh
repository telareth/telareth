#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

SHELL_NAME=$(basename "$SHELL")
RC_FILE="$HOME/.${SHELL_NAME}rc"

install_bun() {
  info "Installing Bun"
  curl -fsSL https://bun.sh/install | bash

  # Bun env lines
  # shellcheck disable=SC2016
  BUN_LINES='export BUN_INSTALL="$HOME/.bun"
  export PATH="$BUN_INSTALL/bin:$PATH"'

  # TODO: does not works it keeps adding this line at the end of the rc file
  if ! grep -q 'BUN_INSTALL' "$RC_FILE"; then
    printf "\n%s\n" "$BUN_LINES" >> "$RC_FILE"
    info "Added Bun lines to $RC_FILE"
  fi

  # Re-evaluate the specific Bun lines to update the current shell's PATH
  eval "$BUN_LINES"

  ok "Setup Complete"
  info "Node: $(bun -v)"
}
