#!/usr/bin/env bash
set -euo pipefail

# source logger
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"

update_system() {
  info "Updating system"
  sudo apt update -y
  sudo apt install -y curl build-essential
}
