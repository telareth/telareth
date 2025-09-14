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
  if command -v pnpm >/dev/null 2>&1; then
    warn "pnpm still exists at: $(which "pnpm")"
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  else
    ok "pnpm removed"
    ok "Purge completed successfully."
  fi
}

purge_pnpm() {
  info "Purging PNPM..."

  # Remove pnpm store & configs
  remove_dir "$HOME/.pnpm-store"
  remove_dir "$HOME/.local/share/pnpm"
  remove_dir "$HOME/.config/pnpm"

  # Remove global pnpm binaries
  remove_file "/usr/local/bin/pnpm"

  # Remove pnpm lines from shell configs
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      sed -i '/PNPM_HOME/d' "$f" || true
    fi
  done

  check_for_leftovers
}
