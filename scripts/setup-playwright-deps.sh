#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="${ROOT_DIR}/.playwright-libs"
PKGS=(libnspr4 libnss3 libasound2t64)

mkdir -p "${DEST_DIR}"

echo "Downloading system libraries needed for Playwright Chromium..."
for pkg in "${PKGS[@]}"; do
  if ! apt-get download "${pkg}"; then
    echo "Package download failed; updating package lists..."
    apt-get update
    apt-get download "${pkg}"
  fi
done

echo "Extracting libraries into ${DEST_DIR}..."
shopt -s nullglob
for deb in "${ROOT_DIR}"/*.deb; do
  dpkg-deb -x "${deb}" "${DEST_DIR}"
done
rm -f "${ROOT_DIR}"/*.deb

echo "Ensuring Chromium is installed for Playwright..."
npx playwright install chromium

echo "Done. LD_LIBRARY_PATH will be set automatically by scripts/a11y-audit.js."
