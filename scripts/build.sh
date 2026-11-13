#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../site"
bundle exec jekyll build --trace "$@"
