#!/usr/bin/env bash
set -euo pipefail

# The path to the main script's directory is needed to source files correctly.
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

rm_dir() {
  local dir="$1"
  if [ -d "$dir" ]; then
    info "Removing directory: $dir"
    rm -rf "$dir"
  else
    warn "Directory not found: $dir"
  fi
}
