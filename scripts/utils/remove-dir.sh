#!/usr/bin/env bash
set -euo pipefail

# source logger
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"

remove_dir() {
  local dir="$1"
  if [ -d "$dir" ]; then
    info "Removing directory: $dir"
    rm -rf "$dir"
  else
    warn "Directory not found: $dir"
  fi
}
