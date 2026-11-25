#!/bin/sh
# Neue Version von GitHub holen und Container neu bauen.
set -e
cd "$(dirname "$0")"
git pull --ff-only
if grep -q '^TUNNEL_TOKEN=.\+' .env 2>/dev/null; then
  docker compose --profile tunnel up -d --build
else
  docker compose up -d --build
fi
docker image prune -f >/dev/null
echo "Schlagzeugnoten ist aktuell."
