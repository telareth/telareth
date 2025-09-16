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

# A simple local function to remove pm2.
purge_pm2() {
  info "Purging existing pm2 installation..."
  if _iscmd "npm"; then
    npm uninstall -g pm2 || true
  else
    warn "npm not found. Cannot automatically uninstall pm2."
  fi
}

# install_pm2 - Installs PM2 and its modules.
#
# Usage:
# install_pm2
# install_pm2 --yes
install_pm2() {
  local auto_yes=""

  # Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes="-y"
      break
    fi
  done

  # Check for existing pm2 installation and prompt for re-install
  if _iscmd "pm2"; then
    if _confirm "PM2 is already installed. Do you want to force re-install it?" "$auto_yes"; then
      purge_pm2
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js installation as PM2 is a Node.js package
  if ! _iscmd "node"; then
    warn "Node.js is not installed. PM2 requires Node.js."
    if _confirm "Do you want to install Node.js (via NVM)?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    else
      info "Node.js installation canceled. Cannot proceed with PM2 installation."
      return 0
    fi
  fi

  # Check if npm is available after the potential Node.js installation.
  if ! _iscmd "npm"; then
    error "npm is not available. Cannot install PM2."
    return 1
  fi

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

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  install_pm2 "$@"
  exit 0
fi
