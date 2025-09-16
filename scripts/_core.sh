#!/bin/sh
# File: core.sh
# A collection of portable utility functions for shell scripting.

# Colors (POSIX compliant)
# Note: Using `printf` with `\033` is portable.
# shellcheck disable=SC2034
RED=$(printf '\033[0;31m')
# shellcheck disable=SC2034
GREEN=$(printf '\033[0;32m')
# shellcheck disable=SC2034
YELLOW=$(printf '\033[0;33m')
# shellcheck disable=SC2034
BLUE=$(printf '\033[0;34m')
# shellcheck disable=SC2034
NC=$(printf '\033[0m')

# A generic printf function to avoid repetition.
# Variables declared inside a function are local by default in POSIX shells.
_log() {
  prefix="$1"
  shift
  printf "%s %s%s\n" "$prefix" "$*" "$NC"
}

## Logger Functions
# Usage:
# info "This is an informational message."
info() {
  _log "${BLUE}[INFO]${NC}" "$@"
}

# Usage:
# warn "This is a warning message."
warn() {
  _log "${YELLOW}[WARN]${NC}" "$@"
}

# Usage:
# error "This is an an error message."
error() {
  _log "${RED}[ERROR]${NC}" "$@"
}

# Usage:
# ok "This operation was successful."
ok() {
  _log "${GREEN}[OK]${NC}" "$@"
}

## Core Utility Functions
#-----------------------------------------------------------------------------
# Source a script and optionally immediately run it
#
# Usage:
# _loadsh "path/to/script"
# _loadsh "--run" "path/to/script"
_loadsh() {
  run_immediately=0
  file_path="$1"

  # Parse arguments with a case statement.
  case "$1" in
    --run)
      run_immediately=1
      file_path="$2"
      shift 2
      ;;
    *)
      file_path="$1"
      shift
      ;;
  esac

  if [ -z "$file_path" ]; then
    error "Usage: _loadsh [--run] <path/to/file>."
    return 1
  fi

  # Determine the source directory in a portable way.
  # This assumes a `scripts` directory structure.
  src_dir="$(dirname "$0")"

  if [ "$(basename "$src_dir")" != "scripts" ]; then
    error "Script must be run from the 'scripts' directory."
    return 1
  fi

  file="$src_dir/$file_path.sh"

  if [ ! -f "$file" ]; then
    error "Unable to source $file."
    return 1
  fi

  # Corrected: Pass all remaining arguments to the sourced script and function
  set -- "$@"
  # shellcheck disable=SC1090
  . "$file"

  if [ "$run_immediately" -eq 1 ]; then
    # Automatically convert filename to function name by replacing hyphens with underscores
    func_name="$(basename "$file_path" | tr '-' '_')"

    if command -v "$func_name" >/dev/null 2>&1; then
      "$func_name" "$@"
    else
      error "Function $func_name not found after sourcing file $file."
      return 1
    fi
  fi
}

## System/File Functions
#-----------------------------------------------------------------------------
# Return true if a command exists, false otherwise.
#
# Usage:
# if _is_cmd "git"; then
#   info "Git is available."
# fi
_iscmd() {
  command -v "$1" >/dev/null 2>&1
}

# Prompt the user for confirmation.
#
# Usage:
# if _confirm "Do you want to proceed?"; then
#   info "Proceeding..."
# else
#   warn "Operation cancelled."
# fi
#
# if _confirm "Do you want to proceed?" --yes; then
#   info "Proceeding..."
# else
#   warn "Operation cancelled."
# fi
_confirm() {
  sentence="$1"
  auto_yes=0

  # Corrected: Check for both --yes and -y flags
  for arg in "$@"; do
    if [ "$arg" = "--yes" ] || [ "$arg" = "-y" ]; then
      auto_yes=1
      break
    fi
  done

  if [ "$auto_yes" -eq 1 ]; then
      return 0
  fi

  # The main confirmation loop
  while true; do
      printf "%s [y/n] " "$sentence"
      # Corrected: Use read -r to prevent mangling of backslashes
      read -r input || return 1

      case "$input" in
          y|Y|yes|YES)
              return 0
              ;;
          n|N|no|NO)
              return 1
              ;;
          *)
              printf "Please answer 'y' or 'n'.\n"
              ;;
      esac
  done
}

# Remove a directory.
#
# Usage:
# _rmdir "path/to/directory"
_rmdir() {
  dir="$1"

  if [ -z "$dir" ]; then
    error "rmdir called with empty argument"
    return 1
  fi

  if [ -d "$dir" ]; then
    info "Removing directory: $dir"
    rm -rf -- "$dir"
  else
    warn "Directory not found: $dir"
  fi
}

# Remove a file.
#
# Usage:
# _rmfile "path/to/file.txt"
_rmfile() {
  file="$1"

  if [ -z "$file" ]; then
    error "rmfile called with empty argument"
    return 1
  fi

  if [ -f "$file" ]; then
    info "Removing file: $file"
    rm -f -- "$file"
    ok "File removed: $file"
  else
    warn "File not found: $file"
  fi
}

# Trap Ctrl+C (POSIX compliant)
trap 'error "Interrupted"; exit 1' INT
