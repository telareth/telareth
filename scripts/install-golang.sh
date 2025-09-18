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

install_golang() {
  local auto_yes=""
  local go_version=""
  local go_archive=""
  local temp_dir
  local profile_file
  local path_export_line

  # parse args
  while [ $# -gt 0 ]; do
    case "$1" in
      -y | --yes)
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

  # Check for required commands
  if ! _iscmd "curl tar"; then
    info "Installing dependencies..."
    _install "curl tar" "$auto_yes"
  fi

  # Purge any previous Go installation to ensure a clean install
  info "Purging previous Go installations to ensure a clean setup."
  if ! _loadsh "--run" "purge-golang" "$auto_yes"; then
    error "Failed to purge previous Go installation. Aborting."
    return 1
  fi

  info "Fetching the latest Go version from go.dev..."
  go_archive=$(curl -s 'https://go.dev/dl/' | grep -oP 'go[0-9.]+\.linux-amd64\.tar\.gz' | head -1)

  if [ -z "$go_archive" ]; then
    error "Failed to determine the latest Go version. The go.dev website format may have changed."
    return 1
  fi

  go_version="${go_archive%.linux-amd64.tar.gz}"
  info "Latest version found: $go_version"

  if _iscmd "go" && [[ "$(go version)" == *"$go_version"* ]]; then
    ok "Go version $go_version is already installed."
    return 0
  fi

  if ! _confirm "Do you want to install Go version $go_version?" "$auto_yes"; then
    warn "Installation cancelled by user."
    return 0
  fi

  info "Downloading $go_archive"
  local download_url="https://go.dev/dl/$go_archive"

  temp_dir="$(mktemp -d)"

  if ! curl -sL "$download_url" -o "$temp_dir/$go_archive"; then
    error "Failed to download Go archive."
    rm -rf "$temp_dir"
    return 1
  fi

  info "Installing Go to /usr/local..."
  sudo rm -rf /usr/local/go || true
  if ! sudo tar -C /usr/local -xzf "$temp_dir/$go_archive"; then
    error "Failed to extract Go archive. Aborting installation."
    rm -rf "$temp_dir"
    return 1
  fi

  rm -rf "$temp_dir"

  info "Adding /usr/local/go/bin to the PATH environment variable."
  profile_file="${HOME}/.profile"
  path_export_line="export PATH=\$PATH:/usr/local/go/bin"

  if ! grep -qxF "$path_export_line" "$profile_file"; then
    echo "$path_export_line" >> "$profile_file"
    ok "Added Go to your PATH in $profile_file."
  else
    warn "Go is already in your PATH. No changes made to $profile_file."
  fi

  ok "Go installation complete."
  warn "Please open a new terminal or run 'source $profile_file' to apply the changes to your PATH."

  info "Verifying installation..."
  if _iscmd "go"; then
    go version
    ok "Go is installed and executable."
  else
    warn "Go is not yet in your PATH. Please source your profile file to verify."
  fi
}

# This is the main entry point for the script
if [ "$#" -gt 0 ] && [ "$1" = "--run" ]; then
  install_golang "$@"
fi
