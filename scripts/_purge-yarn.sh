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
  local found_leftovers=false
  for bin in yarn yarnpkg; do
    if command -v "$bin" >/dev/null 2>&1; then
      warn "$bin still exists at: $(which "$bin")"
      found_leftovers=true
    else
      ok "$bin removed"
    fi
  done
  if [ "$found_leftovers" = false ]; then
    ok "Purge completed successfully."
  else
    warn "Purge completed with some leftovers. Manual cleanup may be required."
  fi
}

purge_yarn() {
  info "Purging Yarn..."

  # Remove Yarn caches and configs
  rm_dir "$HOME/.yarn"
  rm_file "$HOME/.yarnrc" || true
  rm_file "$HOME/.yarnrc.yml" || true
  rm_dir "$HOME/.cache/yarn"
  rm_dir "$HOME/.local/share/yarn"
  rm_dir "$HOME/.config/yarn"

  # Remove Yarn installed via apt
  if command -v apt >/dev/null 2>&1; then
    info "Removing Yarn installed via apt..."
    sudo apt remove -y yarn || true
    sudo apt purge -y yarn || true
  fi

  # Remove global Yarn binaries
  rm_file "/usr/local/bin/yarn" || true
  rm_file "/usr/local/bin/yarnpkg" || true

  # Remove Yarn lines from shell configs
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      sed -i '/yarn/d' "$f" || true
    fi
  done

  check_for_leftovers
}
