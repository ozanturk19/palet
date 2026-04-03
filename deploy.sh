#!/bin/bash
# PALET Web — VPS Deploy Script
# VPS: 135.181.206.109 | Port: 8007
# Kullanım: ./deploy.sh

set -e

VPS_IP="135.181.206.109"
VPS_USER="root"
APP_DIR="/opt/palet"
REPO="https://github.com/ozanturk19/palet.git"
BRANCH="claude/brand-web-design-uWMjl"

echo "==> PALET deploy başlıyor..."

ssh ${VPS_USER}@${VPS_IP} << 'REMOTE'
  set -e

  # Repo yoksa klonla, varsa güncelle
  if [ ! -d /opt/palet ]; then
    git clone https://github.com/ozanturk19/palet.git /opt/palet
  fi

  cd /opt/palet
  git fetch origin
  git checkout claude/brand-web-design-uWMjl
  git pull origin claude/brand-web-design-uWMjl

  cd web

  # Docker Compose ile build & start
  docker compose down --remove-orphans || true
  docker compose build --no-cache
  docker compose up -d

  echo "==> Deploy tamamlandı. http://135.181.206.109:8007"
REMOTE
