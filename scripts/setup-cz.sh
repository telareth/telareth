#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-file.sh"

info "Installing commitizen: the cz-cli, and commitlint"
npm install -g commitizen@latest
npm install --save-dev commitizen@latest

info "Making the repository commitizen-friendly"
npx commitizen init cz-conventional-changelog --save-dev --save-exact --force

info "Installing commitlint"
npm install -D @commitlint/cli @commitlint/config-conventional

warn "Removing eventual old Commitlint configuration files"
rm_file ".commitlintrc" || true
rm_file ".commitlintrc.json" || true
rm_file ".commitlintrc.yaml" || true
rm_file ".commitlintrc.yml" || true
rm_file ".commitlintrc.js" || true
rm_file ".commitlintrc.cjs" || true
rm_file ".commitlintrc.mjs" || true
rm_file ".commitlintrc.ts" || true
rm_file ".commitlintrc.cts" || true
rm_file "commitlint.config.js" || true
rm_file "commitlint.config.cjs" || true
rm_file "commitlint.config.mjs" || true
rm_file "commitlint.config.ts" || true
rm_file "commitlint.config.cts" || true


info "Generating Commitlint configuration file"
cat > commitlint.config.mjs <<'EOM'
export default { extends: ['@commitlint/config-conventional'] };
EOM

ok "Commitizen and Commitlint setup complete. Generated commitlint.config.mjs"
