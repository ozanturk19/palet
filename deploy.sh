#!/bin/bash
# PALETKIDS Deploy Script — paletkids.com
set -e

echo '==> Git pull...'
cd /opt/palet
git pull origin main

echo '==> Bağımlılıklar...'
cd web
npm install --silent

echo '==> Build...'
NODE_ENV=production npm run build

echo '==> Deploy ediliyor...'
# .next dizinini sıfırla ve standalone kopyala
rm -rf /opt/palet-app/.next
cp -r .next/standalone/. /opt/palet-app/

# Static dosyalar
cp -r .next/static /opt/palet-app/.next/static

# Public klasörü — iç içe yapı OLMAMALI, /. ile kopyala
rm -rf /opt/palet-app/public
mkdir -p /opt/palet-app/public
cp -r public/. /opt/palet-app/public/

echo '==> Servis yeniden başlatılıyor...'
pm2 restart palet-web

echo ''
echo '==> Görsel erişim testi...'
sleep 2
MISSING=0
for img in hero.jpg brand-story.jpg category-ceket.jpg category-yelek.jpg category-ayakkabi.jpg product-1.jpg product-2.jpg product-3.jpg product-4.jpg atelier.jpg hero-kids.jpg featured-jacket.jpg lifestyle-1.jpg lifestyle-2.jpg; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:8007/images/$img)
  if [ "$CODE" = '200' ]; then
    echo "  ✓ $img"
  else
    echo "  ✗ $img ($CODE)"
    MISSING=$((MISSING+1))
  fi
done

if [ $MISSING -eq 0 ]; then
  echo ''
  echo '✓ Deploy tamamlandı — https://paletkids.com'
else
  echo ''
  echo "✗ $MISSING görsel erişilemiyor! public/images/ klasörünü kontrol et."
  exit 1
fi
