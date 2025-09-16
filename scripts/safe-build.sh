#!/bin/sh
set -eu

# Check if _core.sh exists before sourcing
if [ -f "$(dirname "$0")/_core.sh" ]; then
  # shellcheck disable=SC1091
  . "$(dirname "$0")/_core.sh"
else
  # Fallback message if the core library is missing
  echo "Error: The core library (_core.sh) was not found. Please ensure it is in the same directory."
  exit 1
fi

restore_configs() {
  info "Restoring ESLint configuration files."
  find . -type f -name "eslint.config.mjs.tmp" | while IFS= read -r file; do
    if [ -f "$file" ]; then
      original_name="${file%.tmp}"
      mv "$file" "$original_name"
      info "Restored $file to $original_name"
    fi
  done
}

backup_configs() {
  warn "Creating a backup of all ESLint configuration files"
  find . -type f -name "eslint.config.mjs" | while IFS= read -r file; do
    if [ -f "$file" ]; then
      mv "$file" "${file}.tmp"
      info "Renamed $file to ${file}.tmp"
    fi
  done
}

reset_nx() {
  info "Resetting Nx"
  if _iscmd "nx"; then
    nx reset
  else
    warn "Nx not found. Skipping 'nx reset'."
  fi

  # FIX: Ensure Nx cache directories exist before starting the build
  info "Clearing and preparing Nx cache directory..."
  rm -rf .nx || true
  mkdir -p .nx/cache/terminalOutputs
}

build() {
  info "Building projects"
  if ! _iscmd "nx"; then
    error "Nx not found. Cannot perform build."
    return 1
  fi

  # The `if ! command; then ... fi` pattern is the most reliable
  # way to handle a non-zero exit code when `set -e` is active.
  if ! nx run-many -t build; then
      error "Nx build failed. Reverting changes"
      restore_configs
      exit 1
  fi

  info "Nx build completed successfully. Checking for dist folders."
  find . -type d -name "dist" | while read -r dist_dir; do
      if [ -d "$dist_dir" ]; then
          info "Found dist folder: $dist_dir"
      else
          error "Dist folder not found for a package. Build may have failed for some projects."
      fi
  done
}

safe_build() {
  info "Starting safe-build process..."

  if ! _iscmd "nx"; then
    error "Nx is not installed. This script requires Nx to build projects."
    exit 1
  fi

  backup_configs
  reset_nx
  build
  restore_configs

  ok "Build process finished"
}

# This is the main entry point for the script
if [ "$#" -gt 0 ] && [ "$1" = "--run" ]; then
  safe_build "$@"
fi
