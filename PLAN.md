# PALET KIDS — Lansman & Büyüme Planı

> Güncellendi: Mayıs 2026 | Durum: Pre-launch (site canlı, ürün üretimi başlıyor)

---

## Mevcut Durum (Tamamlananlar)

- [x] Site canlı: paletkids.com (Next.js 14, VPS, Cloudflare SSL)
- [x] Koleksiyon sayfası, ürün detay, kategori filtreleme
- [x] Gerçek ürün fotoğrafları entegre
- [x] PALET KIDS logo + marka kimliği
- [x] İletişim formu (Server Action, mesajlar kaydediliyor)
- [x] Google Search Console + sitemap.xml
- [x] Google Analytics GA4 (G-8YB82G9S5T)
- [x] SEO metadata (title, description, og:image)
- [x] WhatsApp pre-order CTA (ödeme sistemi hazır olana kadar)
- [x] Kod: VPS + GitHub + Local (3 nokta senkron)

---

## FAZ 1 — Ön Satış & Validasyon (Mayıs–Haziran 2026)

**Hedef:** İlk 20 siparişi WhatsApp üzerinden almak, ödeme sistemi kurulmadan önce talebi ölçmek.

### Teknik
- [ ] **WhatsApp Business** hesabı aç — paletkids için ayrı numara
- [ ] **İletişim formuna e-posta bildirimi** ekle (Resend/Nodemailer ile — yeni mesaj geldiğinde mail at)
- [ ] **OG görsel** (1200×630) hazırla — sosyal medya paylaşımlarında görünsün
- [ ] **Favicon** ekle (şu an yok)
- [ ] Site hız testi (Lighthouse) — 90+ hedef

### Ürün & Operasyon
- [ ] Ürün numune üretimi tamamla (ceket, yelek, ayakkabı)
- [ ] Gerçek ürün fotoğraf çekimi (model çocuk ile, beyaz/krem arka plan)
- [ ] Beden rehberi tablosu hazırla (yaş → göğüs/bel/boy ölçüsü)
- [ ] Kargo anlaşması yap (Aras/Yurtiçi/MNG — karşı ödemeli veya ücretsiz eşik belirle)
- [ ] Fatura/irsaliye süreci belirle

### Pazarlama
- [ ] Instagram hesabı aç: @paletkids
- [ ] İlk 9 kare içerik: ürün + lifestyle + behind the scenes
- [ ] 5–10 micro influencer (çocuk moda, anne blog) ile seeding görüşmesi
- [ ] Lansman öncesi "bekleme listesi" e-posta kampanyası

---

## FAZ 2 — Canlı Satış Başlangıcı (Temmuz–Ağustos 2026)

**Hedef:** Ödeme sistemi entegre, ilk 100 sipariş.

### Teknik (Öncelik Sırası)

#### 1. Ödeme Sistemi
**Öneri: Iyzico** (Türkiye'ye özel, kolay entegrasyon, düşük komisyon)
- Iyzico hesabı aç (şirket kurulumu gerekiyor)
- Next.js API route ile iyzico checkout entegrasyonu
- Sepet state yönetimi (Zustand veya React Context)
- Sipariş onay e-postası

**Alternatif:** Trendyol/Hepsiburada mağaza açarak başla (ödeme alt yapısı hazır, trafik var)

#### 2. Sepet & Sipariş Sistemi
- [ ] Sepete ekle fonksiyonu (localStorage ile client-side cart)
- [ ] Checkout sayfası (adres, kargo seçimi, ödeme)
- [ ] Sipariş onay sayfası + e-posta
- [ ] Basit admin paneli: gelen siparişleri görmek için

#### 3. Stok Yönetimi
- [ ] Her ürün için stok alanı (ürün başına beden × renk)
- [ ] Stok tükendi uyarısı
- [ ] Basit başlangıç: Google Sheets ile stok takibi (kod yazımına gerek yok)

### Operasyon
- [ ] Vergi kaydı / e-arşiv fatura sistemi (Logo GO veya e-Fatura.com)
- [ ] İade/değişim süreci netleştir (kargo kodu, form)
- [ ] Paketleme tasarımı: kutu, doku kağıdı, teşekkür kartı

### Pazarlama
- [ ] Instagram reklamı: 500 TL test bütçesi ile A/B (ürün görseli vs. lifestyle)
- [ ] Google Ads: "çocuk deri ceket" anahtar kelime kampanyası
- [ ] İlk 3 influencer işbirliği (ürün gönderimi + içerik)

---

## FAZ 3 — Büyüme & Ölçekleme (Eylül 2026+)

**Hedef:** Aylık 50+ sipariş, marka bilinirliği, kanal çeşitlendirme.

### Teknik
- [ ] **Hesap oluşturma** — sipariş geçmişi, kayıtlı adres
- [ ] **Ürün yorumları** (Yotpo veya basit kendi çözümü)
- [ ] **E-posta otomasyonu**: hoş geldin serisi, terk edilmiş sepet, yeniden satın alma hatırlatması
- [ ] **Ürün varyant sistemi**: aynı ürün → farklı renk/beden URL'si olmadan
- [ ] **Hız optimizasyonu**: görsel sıkıştırma (WebP), CDN

### Ürün Hattı Genişletme
- [ ] Kız çocuk özel koleksiyon (farklı renk/kesim)
- [ ] Aksesuar: kemer, çanta, şapka
- [ ] Sezonluk limited edition (kış/yaz)
- [ ] Bebek serisi (0–3 yaş) — ayrı positioning

### Kanal Genişletme
- [ ] **Trendyol mağazası** — trafik için önemli
- [ ] **Pop-up stand**: İstanbul alışveriş merkezi (Emaar, Zorlu) — 1 haftalık deneme
- [ ] **B2B**: butik çocuk mağazaları, otel hediyelik, kurumsal (aile etkinlikleri)
- [ ] **Körfez pazarı**: Arabistan/BAE — çocuk premium giyim güçlü

---

## Teknik Borç & Sürekli İyileştirme

### Kısa Vadeli (Bu Ay)
- [ ] **Favicon** ekle — şu an tarayıcı sekmesinde ikon yok
- [ ] **OG görsel** — `public/og-image.jpg` (1200×630) ekle
- [ ] **İletişim formu e-posta bildirimi** — yeni mesajda mail at
- [ ] **Gerçek WhatsApp numarası** — iletisim/page.tsx ve sepet sayfasında placeholder var
- [ ] **Instagram linki** — footer'da instagram.com/paletkids placeholder

### Orta Vadeli
- [ ] Lighthouse skoru 90+ (şu an tahminen 70–80)
- [ ] Görsel optimizasyonu: WebP + next/image sizes düzeltme
- [ ] Beden rehberi modal/popup (ürün sayfasındaki "Beden Rehberi" butonu şu an işlevsiz)
- [ ] Google Search Console'da "Kapsam" hatalarını takip et

---

## KPI Takip Tablosu

| Metrik | Şu An | 3 Ay Hedef | 6 Ay Hedef |
|--------|-------|-----------|-----------|
| Aylık ziyaretçi | 0 | 500 | 2.000 |
| Conversion rate | — | %1 | %2 |
| Aylık sipariş | 0 | 5 | 40 |
| Instagram takipçi | 0 | 500 | 2.000 |
| Ortalama sepet | — | ₺1.500 | ₺1.800 |
| CAC | — | <₺150 | <₺100 |

---

## Acil Yapılacaklar (Bu Hafta)

1. **WhatsApp Business numarasını güncelle** — iletisim/page.tsx satır 18, sepet/page.tsx
2. **Instagram hesabı aç** — @paletkids handle'ını al (biri kapmadan)
3. **Favicon** — logo'dan 512×512 PNG yap, `public/` klasörüne koy
4. **Search Console** — sitemap.xml gönder, indeksleme iste
5. **GA4 gerçek zamanlı** test et — siteyi aç, Analytics'te görünüyor mu bak
6. **Şirket kurulumu** araştır — Iyzico ve e-fatura için gerekli

---

## Senkronizasyon Notu

Kod 3 noktada senkron:
- **VPS** (canlı): `ssh vps` → `/opt/palet/web/`
- **GitHub**: github.com/ozanturk19/palet
- **Local**: `/Users/mac/PaletKids/web/`

Kod değişikliği yapıldığında:
```bash
# VPS'te build + deploy
cd /opt/palet/web
git add -A && git commit -m "değişiklik açıklaması"
git push origin main
npm run build && bash /opt/palet/deploy.sh

# Local'i güncelle
cd /Users/mac/PaletKids
git pull origin main
```
