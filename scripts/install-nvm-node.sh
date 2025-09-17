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

install_nvm_node() {
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

  # Check if Node.js is already installed
  if _iscmd "node"; then
    if _iscmd "nvm"; then
      if _confirm "NVM is already installed. Do you want to force re-install Node.js?" "$auto_yes"; then
        info "Proceeding with NVM re-installation."
      else
        info "Installation cancelled by user."
        return 0
      fi
    else
      warn "Node.js is already installed, but not via NVM. It is highly recommended to use NVM for version management."
      if _confirm "Do you want to continue and install NVM? This may cause conflicts with your current Node.js installation." "$auto_yes"; then
        info "Proceeding with NVM installation."
      else
        info "Installation cancelled by user."
        return 0
      fi
    fi
  fi

  # Check for required dependencies for the NVM installer
  if ! _iscmd "git curl wget"; then
    warn "Installing dependencies..."
    _install "git curl wget" "$auto_yes"
  fi

  info "Installing NVM..."

  # Install NVM using the official script
  if _iscmd "curl"; then
    info "Fetching the latest NVM install script with curl..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
  elif _iscmd "wget"; then
    info "Fetching the latest NVM install script with wget..."
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
  else
    error "Neither curl nor wget is installed. Cannot install NVM."
    return 1
  fi

  # Reload shell to make nvm command available
  info "Sourcing NVM to make it available in the current shell..."
  # FIX: Declare and assign on separate lines to avoid SC2155
  local NVM_DIR
  NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  export NVM_DIR

  # shellcheck disable=SC1091
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  # shellcheck disable=SC1091
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

  # Install the latest LTS version of Node.js
  if _iscmd "nvm"; then
    info "Installing the latest LTS version of Node.js..."
    nvm install --lts || {
      error "Failed to install Node.js via NVM."
      return 1
    }
    nvm use --lts || {
      error "Failed to switch to the installed Node.js version."
      return 1
    }
    info "Node.js and npm have been installed."
    ok "Node.js version: $(node -v)"
    ok "npm version: $(npm -v)"
  else
    error "NVM was not installed correctly. Please check for errors above."
    return 1
  fi

  ok "NVM and Node.js setup complete."
}

# This is where the script's execution logic lives.
# It checks for a --run flag to decide whether to call the function directly.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  # Pass all arguments ($@) to the install_nvm_node function
  install_nvm_node "$@"
  exit 0
fi
