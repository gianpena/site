#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [[ "${1:-}" == "--watch" ]]; then
  bunx @tailwindcss/cli -i src/input.css -o pages/styles.css --watch
else
  bunx @tailwindcss/cli -i src/input.css -o pages/styles.css --minify
fi
