#!/bin/bash
# PALET Web — VPS Deploy Script
# Kullanım: ./deploy.sh
# Not: GitHub Actions ile aynı mekanizmayı (docker run) kullanır.

set -e

VPS_IP="135.181.206.109"
VPS_USER="root"

echo "==> PALET deploy başlıyor → $VPS_IP:8007"

ssh ${VPS_USER}@${VPS_IP} << 'REMOTE'
  set -e
  cd /opt/palet
  git pull origin main

  cd web
  docker build -t palet-web:latest .

  docker stop palet-web 2>/dev/null || true
  docker rm palet-web 2>/dev/null || true
  docker run -d \
    --name palet-web \
    --restart unless-stopped \
    -p 0.0.0.0:8007:8007 \
    palet-web:latest

  sleep 5
  docker ps | grep palet-web
  echo "==> Canlıda: http://135.181.206.109:8007"
REMOTE
