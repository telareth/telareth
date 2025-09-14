#!/usr/bin/env bash
set -euo pipefail

# source logger
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"

SHELL_NAME=$(basename "$SHELL")
RC_FILE="$HOME/.${SHELL_NAME}rc"

install_pnpm() {
  info "Installing PNPM"
  curl -fsSL https://get.pnpm.io/install.sh | sh -

  # PNPM env lines
  # shellcheck disable=SC2016
  PNPM_LINES='export PNPM_HOME="$HOME/.local/share/pnpm"
  case ":$PATH:" in
    *":$PNPM_HOME:"*) ;;
    *) export PATH="$PNPM_HOME:$PATH" ;;
  esac'

  if ! grep -q 'PNPM_HOME' "$RC_FILE"; then
    printf "\n%s\n" "$PNPM_LINES" >> "$RC_FILE"
    info "Added PNPM lines to $RC_FILE"
  fi

  # Instead of sourcing the entire RC_FILE,
  # re-evaluate the specific PNPM lines to update the current shell's PATH
  eval "$PNPM_LINES"
}
