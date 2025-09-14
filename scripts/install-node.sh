#!/usr/bin/env bash
set -euo pipefail

# shellcheck disable=SC1091
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
. "$SCRIPT_DIR/utils/logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/update-system.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/install-nvm.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/install-node-lts.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/install-pnpm.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/install-bun.sh"


install_node() {
  update_system
  install_nvm
  install_node_lts
  install_pnpm
  install_bun
}

# Call the main function
install_node
