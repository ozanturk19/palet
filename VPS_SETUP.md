# VPS Kurulum Rehberi

**Sunucu:** 135.181.206.109  
**Port:** 8007  
**URL:** http://135.181.206.109:8007

---

## 1. İlk Kurulum (Sadece Bir Kez)

VPS'e SSH ile bağlan ve şunları kur:

```bash
ssh root@135.181.206.109

# Docker kur
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker

# Docker Compose kur (v2)
apt-get install -y docker-compose-plugin

# Git kur
apt-get install -y git

# Repo klonla
git clone https://github.com/ozanturk19/palet.git /opt/palet
cd /opt/palet
git checkout claude/brand-web-design-uWMjl
```

## 2. İlk Deploy

```bash
cd /opt/palet/web
docker compose build
docker compose up -d
```

Kontrol:
```bash
docker compose ps
curl http://localhost:8007
```

## 3. Sonraki Güncellemeler

Kod değişikliklerinden sonra:

```bash
cd /opt/palet
git pull origin claude/brand-web-design-uWMjl
cd web
docker compose build
docker compose up -d
```

Veya lokal makineden (SSH key gerekli):

```bash
chmod +x deploy.sh
./deploy.sh
```

## 4. Güvenlik Duvarı

Port 8007'yi aç:

```bash
ufw allow 8007/tcp
ufw reload
```

## 5. Nginx Reverse Proxy (Opsiyonel — Domain için)

Eğer domain bağlanırsa `palet.com.tr → 8007`:

```nginx
server {
    listen 80;
    server_name palet.com.tr www.palet.com.tr;

    location / {
        proxy_pass http://localhost:8007;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
apt-get install -y nginx
# Yukarıdaki config'i /etc/nginx/sites-available/palet'e yaz
ln -s /etc/nginx/sites-available/palet /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## 6. SSL (Let's Encrypt — Domain bağlandıktan sonra)

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d palet.com.tr -d www.palet.com.tr
```

## Klasör Yapısı

```
ozanturk19/palet (GitHub)
├── Design/              ← Tasarım dosyaları (Figma → HTML)
│   ├── katalog_palet/
│   ├── r_n_detay_palet/
│   ├── sepetim_palet/
│   ├── suede_soul_1/    ← Design system (renk paleti v1)
│   └── suede_soul_2/    ← Design system (renk paleti v2)
├── docs/                ← İş planı ve yol haritası
│   ├── BUSINESS_PLAN.md
│   └── ROADMAP.md
├── web/                 ← Next.js web uygulaması
│   ├── src/app/
│   │   ├── page.tsx           → / (Ana sayfa)
│   │   ├── koleksiyon/        → /koleksiyon
│   │   ├── urun/[slug]/       → /urun/:slug
│   │   └── sepet/             → /sepet
│   ├── src/components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── Dockerfile
│   └── docker-compose.yml
├── deploy.sh            ← Deploy scripti
└── VPS_SETUP.md         ← Bu dosya
```
