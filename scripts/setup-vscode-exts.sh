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

setup_vscode_exts() {
  local auto_yes=""

  # Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes="-y"
      break
    fi
  done

  info "Setting up VSCode Extentions"

  # Check if VS Code is installed first
  if ! _iscmd "code"; then
    error "VS Code is not installed. Please install it before running this script."
    exit 1
  fi

  # Install Shellcheck
  info "Checking for Shellcheck..."
  if _iscmd "shellcheck"; then
    ok "Shellcheck is already installed."
    if ! _confirm "Do you want to force reinstall Shellcheck?" "$auto_yes"; then
      info "Shellcheck re-installation skipped."
    fi
  else
    info "Installing Shellcheck..."
    if ! _iscmd "sudo"; then
        error "Sudo is not installed. Please install it before running this script."
        return 1
    fi
    sudo apt update -y || true
    sudo apt install shellcheck -y
    ok "Shellcheck installed successfully."
  fi

  # Install shfmt
  info "Checking for shfmt..."
  if _iscmd "shfmt"; then
    ok "shfmt is already installed."
    if ! _confirm "Do you want to force reinstall shfmt?" "$auto_yes"; then
      info "shfmt re-installation skipped."
    fi
  else
    info "Checking for Go compiler..."
    if ! _iscmd "go"; then
      if _confirm "Go is not installed. Do you want to install it now?" "$auto_yes"; then
        _loadsh "--run" "install-golang" "$auto_yes" || {
          error "Failed to install Go. Cannot proceed with shfmt installation."
          return 1
        }
        info "Go installed successfully. Sourcing Go's bin directory to update PATH..."
        export PATH="$PATH:/usr/local/go/bin"
      else
        warn "Go installation skipped. Cannot install shfmt."
        return 0
      fi
    fi

    info "Installing shfmt via go install..."
    # FIX: Add GOPATH to PATH so that `go install` can find shfmt
    export PATH="$PATH:$HOME/go/bin"
    if ! go install mvdan.cc/sh/v3/cmd/shfmt@latest; then
        error "Failed to install shfmt. Please check the Go installation."
        return 1
    fi
    ok "shfmt installed successfully."
  fi

  # Configure VS Code settings for shfmt
  info "CONFIGURING VS CODE"
  local shfmt_path
  if ! shfmt_path=$(command -v shfmt); then
    error "shfmt was not found. Cannot configure VS Code settings."
    return 1
  fi

  local vscode_dir=".vscode"
  local settings_file="${vscode_dir}/settings.json"

  if [ ! -d "$vscode_dir" ]; then
    mkdir -p "$vscode_dir"
    ok "Created .vscode directory."
  fi

  info "Setting shfmt path in ${settings_file}"
  local shfmt_setting="    \"shellformat.path\": \"${shfmt_path}\""

  if [ ! -f "$settings_file" ]; then
    printf "{\n%s\n}\n" "$shfmt_setting" > "$settings_file"
    ok "Created new settings.json with shfmt path."
  else
    # Check if the setting already exists
    if grep -q "shellformat.path" "$settings_file"; then
      # Replace the existing line
      sed -i "s|.*\"shellformat.path\": \".*\"|${shfmt_setting}|" "$settings_file"
      ok "Updated existing shfmt path in settings.json."
    else
      # Insert the new line before the closing brace
      sed -i -e '/^}/d' "$settings_file"
      printf "%s,\n}\n" "$shfmt_setting" >> "$settings_file"
      ok "Added new shfmt path to existing settings.json."
    fi
  fi

  ok "VS Code extensions setup complete."
}

# This is the main entry point for the script
if [ "$#" -gt 0 ] && [ "$1" = "--run" ]; then
  setup_vscode_exts "$@"
fi
