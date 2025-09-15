#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/_rm-file.sh"

info "Installing prettier"
npm install -g prettier@latest
npm install --save-dev --save-exact prettier@latest
npm install --save-dev @telareth/prettier-config@latest

warn "Removing eventual old Prettier configuration files"
rm_file ".prettierrc" || true
rm_file ".prettierrc.json" || true
rm_file ".prettierrc.yml" || true
rm_file ".prettierrc.yaml" || true
rm_file ".prettierrc.json5" || true
rm_file ".prettierrc.js" || true
rm_file "prettier.config.js" || true
rm_file ".prettierrc.ts" || true
rm_file "prettier.config.ts" || true
rm_file ".prettierrc.mjs" || true
rm_file "prettier.config.mjs" || true
rm_file ".prettierrc.mts" || true
rm_file "prettier.config.mts" || true
rm_file ".prettierrc.cjs" || true
rm_file "prettier.config.cjs" || true
rm_file ".prettierrc.cts" || true
rm_file "prettier.config.cts" || true
rm_file ".prettierrc.toml" || true

info "Genereting new Prettier configuration file"
cat > .prettierrc.mjs <<'EOM'
import telarethPrettierConfig from '@telareth/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @typedef {import("prettier").Config}
 */
const config = {
  ...telarethPrettierConfig,
};

export default config;
EOM

info "Generating .prettierignore fine"
rm_file ".prettierignore" || true
cat > .prettierignore <<'EOM'
dist
/coverage
/.nx/cache
/.nx/workspace-data
EOM

ok "Prettier setup complete. Generated .prettierrc.mjs and .prettierignore"
