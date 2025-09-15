#!/usr/bin/env bash

SCRIPT_DIR="$(dirname "$0")"

# shellcheck disable=SC1091
. "$SCRIPT_DIR/_logger.sh"

info "Updating internal dev tools"

npm i -D @telareth/eslint-plugin@latest @telareth/prettier-config@latest
npm i

info "Staging changes"
git add .
git commit -m "chore: update internal dev tools"

ok "Committed changes. Manually tun git push"
