#!/usr/bin/env bash

# shellcheck disable=SC1091
DOCKER_COMPOSE_FILE="$(dirname "${BASH_SOURCE[0]}")/docker-compose.yml"

docker compose -f "$DOCKER_COMPOSE_FILE" up 2>&1
