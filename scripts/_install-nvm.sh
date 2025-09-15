#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

SHELL_NAME=$(basename "$SHELL")
RC_FILE="$HOME/.${SHELL_NAME}rc"

install_nvm() {
  info "Installing NVM"
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

  # NVM env lines
  # shellcheck disable=SC2016
  NVM_LINES='export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm'

  if ! grep -q 'nvm.sh' "$RC_FILE"; then
    printf "\n%s\n" "$NVM_LINES" >> "$RC_FILE"
    info "Added NVM lines to $RC_FILE"
  fi

  # Source NVM for current session
  export NVM_DIR="$HOME/.nvm"
  # shellcheck disable=SC1091
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

  ok "Setup Complete"
  info "nvm: $(nvm -v)"
}
