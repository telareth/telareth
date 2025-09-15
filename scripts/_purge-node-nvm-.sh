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
  for bin in node npm npx nvm; do
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


purge_node_nvm() {
  info "Purging Node.js, npm, and nvm..."

  # Remove nvm
  rm_dir "$HOME/.nvm"
  for f in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.zprofile" "$HOME/.bash_profile"; do
    if [ -f "$f" ]; then
      sed -i '/NVM_DIR/d' "$f" || true
      sed -i '/nvm.sh/d' "$f" || true
      sed -i '/bash_completion/d' "$f" || true
    fi
  done

  # Remove npm global cache & config
  rm_dir "$HOME/.npm"
  rm_dir "$HOME/.config/npm"
  rm_dir "$HOME/.cache/npm"

  # Remove Node.js/npm installed via apt
  if command -v apt >/dev/null 2>&1; then
    info "Removing Node.js, npm installed via apt..."
    sudo apt remove -y nodejs npm || true
    sudo apt purge -y nodejs npm || true
  fi

  # Remove global installations in /usr/local
  rm_dir "/usr/local/lib/node_modules"
  rm_file "/usr/local/bin/node" || true
  rm_file "/usr/local/bin/npm" || true
  rm_file "/usr/local/bin/npx" || true

  check_for_leftovers
}
