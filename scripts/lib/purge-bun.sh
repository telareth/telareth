#!/usr/bin/env bash
set -euo pipefail

# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/logger.sh"
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/remove-dir.sh"
# shellcheck disable=SC1091
. "$(dirname "${BASH_SOURCE[0]}")/../utils/remove-file.sh"

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
  remove_dir "$HOME/.bun"

  # Remove global Bun binary
  remove_file "/usr/local/bin/bun"

  # Remove Bun lines from shell configs
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      sed -i '/BUN_INSTALL/d' "$f" || true
    fi
  done

  check_for_leftovers
}
