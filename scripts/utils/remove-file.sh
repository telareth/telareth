#!/usr/bin/env bash
set -euo pipefail

# source logger
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"

remove_file() {
  local file="$1"
  if [ -f "$file" ]; then
    info "Removing file: $file"
    rm -f "$file"
  else
    warn "File not found: $file"
  fi
}
