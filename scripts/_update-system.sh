#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

update_system() {
  info "Updating system"
  sudo apt update -y
  sudo apt install -y curl build-essential
}
