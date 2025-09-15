#!/usr/bin/env bash

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

info "Updating tools"
npm i -g @telareth/cli@latest
npm i -D @telareth/eslint-plugin@latest @telareth/prettier-config@latest @telareth/cli@latest
npm i

info "Staging changes"
git add .
git commit -m "chore: update tools to latest version"

ok "Committed changes. Manually run git push"
