#!/bin/sh
set -eu

# Check if _core.sh exists before sourcing
SCRIPT_DIR=$(dirname "$0")
if [ -f "$SCRIPT_DIR/_core.sh" ]; then
  # shellcheck disable=SC1091
  . "$SCRIPT_DIR/_core.sh"
else
  echo "Error: The core library (_core.sh) was not found. Please ensure it is in the same directory." >&2
  exit 1
fi

install_redis() {
  auto_yes=""

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

  if _iscmd redis-cli; then
    if ! _confirm "Redis is already installed. Do you want to proceed anyway?" "$auto_yes"; then
      info "Installation canceled by user."
      return 0
    fi
  fi

  # Install core dependencies if missing
  if ! _iscmd lsb-release || ! _iscmd curl || ! _iscmd gpg; then
    sudo apt-get update
    if [ -n "$auto_yes" ]; then
      sudo apt-get install -y lsb-release curl gpg
    else
      sudo apt-get install lsb-release curl gpg
    fi
  fi

  # Install Redis
  sudo apt-get update

    # Download and install Redis GPG key
  if [ -n "$auto_yes" ]; then
    curl -fsSL https://packages.redis.io/gpg \
      | sudo gpg --dearmor --batch --yes -o /usr/share/keyrings/redis-archive-keyring.gpg
  else
    curl -fsSL https://packages.redis.io/gpg \
      | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
  fi


  sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg

  echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" \
    | sudo tee /etc/apt/sources.list.d/redis.list >/dev/null

  sudo apt-get update
  if [ -n "$auto_yes" ]; then
    sudo apt-get install -y redis
  else
    sudo apt-get install redis
  fi

  # Enable Redis startup automatically at boot time
  sudo systemctl enable redis-server
  sudo systemctl start redis-server

  ok "Setup Complete"
}

# Execution logic
if [ $# -gt 0 ] && [ "$1" = "--run" ]; then
  install_redis "$@"
  exit 0
fi
