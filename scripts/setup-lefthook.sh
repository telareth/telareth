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

# A local function to remove existing Lefthook packages and config files.
purge_lefthook() {
  info "Purging existing Lefthook installations..."
  if _iscmd "npm"; then
    npm uninstall -g lefthook || true
  else
    warn "npm not found. Cannot automatically uninstall packages."
  fi
}

# setup_lefthook - Installs Lefthook and sets up a configuration file.
#
# Usage:
# setup_lefthook
# setup_lefthook --yes
setup_lefthook() {
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

  # Check for existing installation and prompt for re-install
  if _iscmd "lefthook"; then
    if _confirm "Lefthook is already installed. Do you want to force re-install?" "$auto_yes"; then
      purge_lefthook
    else
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Check for Node.js and npm as a prerequisite
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required for Lefthook."
    if _confirm "Do you want to install Node.js (via NVM)?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Please check for errors above."
        return 1
      }
    else
      info "Node.js installation canceled. Cannot proceed."
      return 0
    fi
  fi

  # Verify npm is available after the potential Node.js installation
  if ! _iscmd "npm"; then
    error "npm is not available. Cannot install Lefthook."
    return 1
  fi

  info "Installing lefthook"
  npm install -g lefthook@latest
  npm install --save-dev lefthook@latest

  warn "Removing eventual old Lefthook configuration files"
  _rmfile "lefthook.yml" || true

  info "Generating Lefthook configuration file"
  cat > lefthook.yml <<'EOM'
commit-msg:
  jobs:
    - name: lint commit msg
      run: npx commitlint --verbose --edit {1}

pre-commit:
  jobs:
    - name: lint and format
      run: npx eslint --fix .
      stage_fixed: true
EOM

  # Run the install command to link the Git hooks
  if _iscmd "lefthook"; then
    info "Running lefthook install to link the Git hooks..."
    lefthook install
  else
    warn "Lefthook was not found after installation. Skipping 'lefthook install'."
  fi

  ok "Lefthook setup complete. Generated lefthook.yml"
}

# This is where the script's execution logic lives.
if [ "$#" -gt 0 ] && [ "$1" == "--run" ]; then
  setup_lefthook "$@"
  exit 0
fi
