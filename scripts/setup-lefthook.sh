#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-file.sh"

info "Installing lefthook"
npm install -g lefthook@latest
npm install --save-dev lefthook@latest

warn "Removing eventual old Lefthook configuration files"
rm_file "lefthook.yml" || true

info "Generating Lefthook configuration file"
cat > lefthook.yml <<'EOM'
commit-msg:
  jobs:
    - name: lint commit msg
      run: npx commitlint --verbose --edit {1}

pre-commit:
  jobs:
    - name: lint and format
      run: npx eslint --fix .
      stage_fixed: true
EOM

info "Running lefthook install"
lefthook install

ok "Lefthook setup complete. Generated lefthook.yml"
