#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

rm_file() {
  local file="${1:-}"

  if [[ -z "$file" ]]; then
    error "rm_file called with empty argument"
    return 1
  fi

  if [[ -f "$file" ]]; then
    info "Removing file: $file"
    rm -f -- "$file"
    ok "File removed: $file"
  else
    warn "File not found: $file"
  fi
}
