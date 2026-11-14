#!/bin/sh
# Neue Version von GitHub holen und Container neu bauen.
set -e
cd "$(dirname "$0")"
git pull --ff-only
docker compose up -d --build
docker image prune -f >/dev/null
echo "Drum Notes ist aktuell."
