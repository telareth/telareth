#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_core.sh"

update_tools() {
  local auto_yes=""

  # parse args
  while [ $# -gt 0 ]; do
    case "$1" in
      -y|--yes)
        auto_yes="-y"
        shift
        ;;
      --run)
        shift
        ;;
      *)
        shift
        ;;
    esac
  done

  # Check for Node.js and npm
  if ! _iscmd "node"; then
    warn "Node.js is not installed. It is required to update tools."
    if _confirm "Do you want to install Node.js?" "$auto_yes"; then
      _loadsh "--run" "install-node" "$auto_yes" || {
        error "Failed to install Node.js. Cannot proceed."
        return 1
      }
    else
      info "Node.js installation canceled. Cannot proceed."
      return 0
    fi
  fi

  # Check for git
  if ! _iscmd "git"; then
    _install "git" "$auto_yes"
  fi

  # Check if we are in a Git repository
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    error "Not a Git repository. Cannot proceed."
    return 1
  fi

  info "Updating tools"
  npm i -g @telareth/cli@latest
  npm i -D @telareth/eslint-plugin@latest @telareth/prettier-config@latest @telareth/cli@latest
  npm i

  # Check for pending changes
  if [ -n "$(git status --porcelain)" ]; then
    info "Staging and committing changes"
    git add .
    git commit -m "chore: update tools to latest version"
    ok "Changes committed successfully."
    warn "Remember to manually run 'git push' to sync changes."
  else
    warn "No changes to commit. Tools are already up to date."
    ok "Update check complete."
  fi
}

# This is the main entry point for the script
if [ "$#" -gt 0 ] && [ "$1" = "--run" ]; then
  update_tools "$@"
fi
