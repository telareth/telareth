#!/usr/bin/env bash
set -euo pipefail

# Source library functions
# shellcheck disable=SC1091
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
. "$SCRIPT_DIR/utils/logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/install-bun.sh"

install_pm2() {
  info "Installing PM2 globally..."
  if npm install -g pm2; then
    ok "PM2 installed successfully"
  else
    error "Failed to install PM2"
    return 1
  fi

  info "Installing PM2 Modules..."

  info "Installing pm2 typescript module..."
  if pm2 install typescript; then
    ok "PM2 TypeScript module installed"
  else
    warn "Failed to install pm2 typescript module, maybe already installed"
  fi

  info "Installing pm2-logrotate module..."
  if pm2 install pm2-logrotate; then
    ok "PM2 Logrotate module installed"
  else
    warn "Failed to install pm2-logrotate module, maybe already installed"
  fi

  ok "PM2 Setup Complete"
  pm2 -v
}

# Check if Bun is installed, and if not, install it.
if ! command -v bun &> /dev/null; then
    info "Bun not found. Installing now..."
    install_bun
else
    info "Bun is already installed. Skipping installation."
fi

install_pm2
