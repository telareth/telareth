#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-file.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-dir.sh"

check_for_leftovers() {
  info "Checking for leftovers..."
  if command -v bun >/dev/null 2>&1; then
    warn "bun still exists at: $(which "bun")"
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  else
    ok "bun removed"
    ok "Purge completed successfully."
  fi
}

purge_bun() {
  info "Purging Bun..."

  # Remove Bun's installation directory
  rm_dir "$HOME/.bun"

  # Remove global Bun binary
  rm_file "/usr/local/bin/bun" || true

  # Remove Bun lines from shell configs
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      sed -i '/BUN_INSTALL/d' "$f" || true
    fi
  done

  check_for_leftovers
}
