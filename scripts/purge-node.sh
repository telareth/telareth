#!/usr/bin/env bash
set -euo pipefail

# The path to the main script's directory is needed to source files correctly.
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
SCRIPT_DIR=$(dirname "$0")

# shellcheck disable=SC1091
. "$SCRIPT_DIR/utils/logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/utils/remove-dir.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/utils/remove-file.sh"

# Source the purge functions
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/purge-node-nvm.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/purge-pnpm.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/purge-yarn.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/lib/purge-bun.sh"

purge_node() {
  info "Purging Node.js, npm, pnpm, yarn, and bun from the system..."
  purge_pnpm
  purge_yarn
  purge_bun
  purge_node_nvm
}

# Call the main function
purge_node
