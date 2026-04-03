import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kargo & İade — PALLET",
  description:
    "PALLET kargo süreleri, ücretsiz iade koşulları ve değişim politikası. 14 gün koşulsuz iade.",
};

const shippingInfo = [
  {
    icon: "local_shipping",
    title: "Standart Kargo",
    detail: "2 – 4 iş günü",
    note: "Ücretsiz (tüm siparişler)",
    highlight: false,
  },
  {
    icon: "bolt",
    title: "Ekspres Kargo",
    detail: "1 iş günü",
    note: "₺79 — saat 14:00'e kadar",
    highlight: false,
  },
  {
    icon: "public",
    title: "Yurt Dışı",
    detail: "5 – 10 iş günü",
    note: "AB ülkeleri — ₺299",
    highlight: false,
  },
  {
    icon: "recycling",
    title: "Ücretsiz İade",
    detail: "14 gün içinde",
    note: "Koşulsuz, ücretsiz",
    highlight: true,
  },
];

const returnSteps = [
  {
    step: "01",
    title: "İade Talebi Oluşturun",
    desc: "hello@pallet.com.tr adresine sipariş numaranızı ve iade nedeninizi yazın. 4 saat içinde yanıt alırsınız.",
  },
  {
    step: "02",
    title: "Kargo Kodunu Alın",
    desc: "Size ücretsiz kargo etiketi e-posta ile gönderilir. Herhangi bir Yurtiçi Kargo şubesine bırakabilirsiniz.",
  },
  {
    step: "03",
    title: "Ürünü Paketleyin",
    desc: "Ürünü orijinal kutusu ve koruyucu kağıdıyla birlikte gönderin. Giyilmemiş ve hasarsız olması şarttır.",
  },
  {
    step: "04",
    title: "İadenizi Takip Edin",
    desc: "Ürün depoya ulaştıktan sonra 2 iş günü içinde ödeme iadesi başlatılır. Kartınıza 5-10 iş günü içinde yansır.",
  },
];

const conditions = [
  { ok: true, text: "Giyilmemiş, orijinal kutusunda" },
  { ok: true, text: "14 gün içinde talep edilmiş" },
  { ok: true, text: "Beden değişimi — sınırsız" },
  { ok: true, text: "Renk değişimi — stok durumuna göre" },
  { ok: false, text: "Dış mekanda giyilmiş ürünler" },
  { ok: false, text: "Bakım kitinin açılmış olması" },
  { ok: false, text: "Orijinal etiketi çıkarılmış ürünler" },
];

export default function KargoIadePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              Kargo & İade — PALLET
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              Kolay <br />
              <span className="text-primary italic">İade.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              14 gün içinde, koşulsuz, ücretsiz iade. Beden tutmadıysa veya
              beklentini karşılamadıysa — sorunsuz geri alırız.
            </p>
          </div>
        </section>

        {/* Shipping grid */}
        <section className="py-4 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {shippingInfo.map((item) => (
              <div
                key={item.title}
                className={`p-10 ${
                  item.highlight
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl mb-6 block ${
                    item.highlight ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {item.icon}
                </span>
                <h3 className="font-headline text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p
                  className={`font-headline text-3xl font-extrabold mb-2 ${
                    item.highlight ? "text-on-primary" : "text-on-background"
                  }`}
                >
                  {item.detail}
                </p>
                <p
                  className={`text-sm font-body ${
                    item.highlight
                      ? "text-on-primary/70"
                      : "text-on-surface-variant"
                  }`}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Return steps */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                İade Süreci
              </h2>
              <p className="text-on-surface-variant font-body">
                4 adımda tamamlanır, ortalama 10 dakika sürer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {returnSteps.map((step) => (
                <div key={step.step} className="bg-surface-container-low p-10">
                  <span className="font-headline text-5xl font-extrabold text-outline-variant/25 block mb-6">
                    {step.step}
                  </span>
                  <h3 className="font-headline text-lg font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter mb-8">
                  İade Koşulları
                </h2>
                <div className="space-y-3">
                  {conditions.map((c) => (
                    <div
                      key={c.text}
                      className="flex items-center gap-4 bg-surface-container-lowest p-5"
                    >
                      <span
                        className={`material-symbols-outlined flex-shrink-0 ${
                          c.ok ? "text-primary" : "text-error"
                        }`}
                      >
                        {c.ok ? "check_circle" : "cancel"}
                      </span>
                      <span className="font-body text-sm text-on-surface">
                        {c.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-surface-container-lowest p-10">
                  <h3 className="font-headline text-xl font-bold mb-4">
                    Değişim
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm mb-6">
                    Beden veya renk değişimi, iade ile aynı süreçte işlenir.
                    Stokta olmayan beden/renk için talep alıyoruz ve geldiğinde
                    öncelikli olarak bildirim yapıyoruz.
                  </p>
                  <p className="text-xs text-on-surface-variant font-body">
                    Değişim kargosu da ücretsizdir.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-10">
                  <h3 className="font-headline text-xl font-bold mb-4">
                    Ödeme İadesi
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                    Kredi kartı ödemelerinde iade bankanıza bağlı olarak 5–10
                    iş günü alır. Havale ile yapılan ödemelerde 2 iş günü
                    içinde hesabınıza aktarılır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-headline text-2xl font-bold mb-2">
                İade başlatmak için
              </p>
              <p className="text-on-surface-variant font-body text-sm">
                hello@pallet.com.tr — Sipariş numaranızla yazın.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/iletisim"
                className="bg-primary text-on-primary px-8 py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
              >
                İletişim
              </Link>
              <Link
                href="/koleksiyon"
                className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                Koleksiyon
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
