#!/usr/bin/env bash
set -euo pipefail

# shellcheck disable=SC1091
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_update-system.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_install-nvm.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_install-node-lts.sh"


install_node() {
  update_system
  install_nvm
  install_node_lts
}

# Call the main function
install_node
