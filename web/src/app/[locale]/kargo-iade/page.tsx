import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Shipping & Returns" : "Kargo & İade",
    description: en
      ? "PALET KIDS shipping times, free return conditions and exchange policy. 14-day unconditional returns."
      : "PALET KIDS kargo süreleri, ücretsiz iade koşulları ve değişim politikası. 14 gün koşulsuz iade.",
  };
}

export default async function KargoIadePage() {
  const locale = await getLocale();
  const en = locale === "en";

  const shippingInfo = en
    ? [
        {
          icon: "local_shipping",
          title: "Standard Shipping",
          detail: "2 – 4 business days",
          note: "Free (all orders)",
          highlight: false,
        },
        {
          icon: "bolt",
          title: "Express Shipping",
          detail: "1 business day",
          note: "₺79 — order by 14:00",
          highlight: false,
        },
        {
          icon: "public",
          title: "International",
          detail: "5 – 10 business days",
          note: "EU countries — ₺299",
          highlight: false,
        },
        {
          icon: "recycling",
          title: "Free Returns",
          detail: "Within 14 days",
          note: "Unconditional, free",
          highlight: true,
        },
      ]
    : [
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

  const returnSteps = en
    ? [
        {
          step: "01",
          title: "Submit a Return Request",
          desc: "Email info@paletkids.com with your order number and reason for return. You'll receive a reply within 4 hours.",
        },
        {
          step: "02",
          title: "Receive Your Shipping Label",
          desc: "A free prepaid shipping label is sent to you by email. Drop it at any Yurtiçi Kargo branch.",
        },
        {
          step: "03",
          title: "Package the Item",
          desc: "Send the item in its original box with protective paper. It must be unworn and undamaged.",
        },
        {
          step: "04",
          title: "Track Your Return",
          desc: "Once the item reaches our warehouse, a refund is initiated within 2 business days. It will appear on your card within 5–10 business days.",
        },
      ]
    : [
        {
          step: "01",
          title: "İade Talebi Oluşturun",
          desc: "info@paletkids.com adresine sipariş numaranızı ve iade nedeninizi yazın. 4 saat içinde yanıt alırsınız.",
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

  const conditions = en
    ? [
        { ok: true, text: "Unworn, in original box" },
        { ok: true, text: "Return requested within 14 days" },
        { ok: true, text: "Size exchange — unlimited" },
        { ok: true, text: "Colour exchange — subject to stock" },
        { ok: false, text: "Items worn outdoors" },
        { ok: false, text: "Opened care kit" },
        { ok: false, text: "Items with original label removed" },
      ]
    : [
        { ok: true, text: "Giyilmemiş, orijinal kutusunda" },
        { ok: true, text: "14 gün içinde talep edilmiş" },
        { ok: true, text: "Beden değişimi — sınırsız" },
        { ok: true, text: "Renk değişimi — stok durumuna göre" },
        { ok: false, text: "Dış mekanda giyilmiş ürünler" },
        { ok: false, text: "Bakım kitinin açılmış olması" },
        { ok: false, text: "Orijinal etiketi çıkarılmış ürünler" },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              {en ? "Shipping & Returns" : "Kargo & İade"}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              {en ? (
                <>Easy<br /><span className="text-primary italic">Returns.</span></>
              ) : (
                <>Kolay<br /><span className="text-primary italic">İade.</span></>
              )}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              {en
                ? "14-day unconditional free returns. If the size doesn't fit or it didn't meet your expectations — we take it back, no questions asked."
                : "14 gün içinde, koşulsuz, ücretsiz iade. Beden tutmadıysa veya beklentini karşılamadıysa — sorunsuz geri alırız."}
            </p>
          </div>
        </section>

        {/* Shipping grid */}
        <section className="py-4 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {shippingInfo.map((item) => (
              <div
                key={item.title}
                className={`p-10 ${item.highlight ? "bg-primary text-on-primary" : "bg-surface-container-low"}`}
              >
                <span
                  className={`material-symbols-outlined text-3xl mb-6 block ${
                    item.highlight ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {item.icon}
                </span>
                <h3 className="font-headline text-lg font-bold mb-2">{item.title}</h3>
                <p
                  className={`font-headline text-3xl font-extrabold mb-2 ${
                    item.highlight ? "text-on-primary" : "text-on-background"
                  }`}
                >
                  {item.detail}
                </p>
                <p
                  className={`text-sm font-body ${
                    item.highlight ? "text-on-primary/70" : "text-on-surface-variant"
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
                {en ? "Return Process" : "İade Süreci"}
              </h2>
              <p className="text-on-surface-variant font-body">
                {en
                  ? "Completed in 4 steps, average 10 minutes."
                  : "4 adımda tamamlanır, ortalama 10 dakika sürer."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {returnSteps.map((step) => (
                <div key={step.step} className="bg-surface-container-low p-10">
                  <span className="font-headline text-5xl font-extrabold text-outline-variant/25 block mb-6">
                    {step.step}
                  </span>
                  <h3 className="font-headline text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">{step.desc}</p>
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
                  {en ? "Return Conditions" : "İade Koşulları"}
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
                      <span className="font-body text-sm text-on-surface">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-surface-container-lowest p-10">
                  <h3 className="font-headline text-xl font-bold mb-4">
                    {en ? "Exchange" : "Değişim"}
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm mb-6">
                    {en
                      ? "Size or colour exchanges are processed through the same return procedure. For sizes or colours not in stock, we take your request and notify you with priority when available."
                      : "Beden veya renk değişimi, iade ile aynı süreçte işlenir. Stokta olmayan beden/renk için talep alıyoruz ve geldiğinde öncelikli olarak bildirim yapıyoruz."}
                  </p>
                  <p className="text-xs text-on-surface-variant font-body">
                    {en ? "Exchange shipping is also free." : "Değişim kargosu da ücretsizdir."}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-10">
                  <h3 className="font-headline text-xl font-bold mb-4">
                    {en ? "Refund" : "Ödeme İadesi"}
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                    {en
                      ? "For credit card payments, the refund takes 5–10 business days depending on your bank. Bank transfer payments are returned to your account within 2 business days."
                      : "Kredi kartı ödemelerinde iade bankanıza bağlı olarak 5–10 iş günü alır. Havale ile yapılan ödemelerde 2 iş günü içinde hesabınıza aktarılır."}
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
                {en ? "To start a return" : "İade başlatmak için"}
              </p>
              <p className="text-on-surface-variant font-body text-sm">
                {en
                  ? "info@paletkids.com — include your order number."
                  : "info@paletkids.com — Sipariş numaranızla yazın."}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/iletisim"
                className="bg-primary text-on-primary px-8 py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
              >
                {en ? "Contact" : "İletişim"}
              </Link>
              <Link
                href="/koleksiyon"
                className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                {en ? "Collection" : "Koleksiyon"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
