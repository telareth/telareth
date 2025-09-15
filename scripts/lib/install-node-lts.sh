#!/usr/bin/env bash
set -euo pipefail

# source logger
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"

install_node_lts() {
  info "Installing Node LTS via NVM"

  # Use a subshell to ensure NVM is fully initialized
  LTS_VERSION=$(
    bash -c '
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm ls-remote --lts | grep -Eo "v[0-9]+\.[0-9]+\.[0-9]+" | tail -1
    '
  )

  if [ -z "$LTS_VERSION" ]; then
    echo "[ERROR] Failed to fetch latest LTS version"
    exit 1
  fi

  info "Latest LTS version: $LTS_VERSION"

  # Install and use it
  nvm install "$LTS_VERSION"
  nvm alias default "$LTS_VERSION"
  nvm use "$LTS_VERSION"

  # Update npm
  npm install -g npm@latest

  ok "Setup Complete"
  info "Node: $(node -v)"
  info "npm:  $(npm -v)"
}
