#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [[ "${1:-}" == "--watch" ]]; then
  tools/tailwindcss -i src/input.css -o pages/styles.css --watch
else
  tools/tailwindcss -i src/input.css -o pages/styles.css --minify
fi
