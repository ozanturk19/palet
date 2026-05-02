import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Sustainability" : "Sürdürülebilirlik",
    description: en
      ? "PALET KIDS environmental and social responsibility. Vegetable-tanned leather, carbon-neutral shipping and fair wages."
      : "PALET KIDS'in çevresel ve sosyal sorumluluk yaklaşımı. Vegetable-tanned deri, karbon dengeleme ve adil ücret politikası.",
  };
}

export default async function SurdurulebilirlikPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const pillars = en
    ? [
        {
          icon: "eco",
          label: "Material",
          title: "Vegetable-Tanned Leather",
          body: "We select tanneries that use vegetable tannins instead of chromium. The process is slower (6–8 weeks vs 24 hours) but the leather is biodegradable and the wastewater far less toxic.",
          stat: "100%",
          statLabel: "Vegetable Tanned",
        },
        {
          icon: "water",
          label: "Water & Chemicals",
          title: "Water-Based Dyes",
          body: "Water-based formulas are used instead of solvent-based dyes. Dyehouse wastewater is treated before discharge; over the past 2 years water consumption per atelier has fallen by 40%.",
          stat: "–40%",
          statLabel: "Water Consumption",
        },
        {
          icon: "co2",
          label: "Climate",
          title: "Carbon-Neutral Shipping",
          body: "The carbon footprint calculated for each item sold is offset through approved forestry projects. From 2026 we are beginning Scope 3 supply-chain measurement.",
          stat: "Net Zero",
          statLabel: "Target: 2028",
        },
        {
          icon: "groups",
          label: "People",
          title: "Fair Wage Policy",
          body: "Workers in our Tuscany atelier are paid 1.4× the regional minimum wage. All workers have full social insurance; overtime is contractual and voluntary.",
          stat: "×1.4",
          statLabel: "Above Minimum Wage",
        },
      ]
    : [
        {
          icon: "eco",
          label: "Malzeme",
          title: "Bitkisel Tabaklanmış Deri",
          body: "Krom yerine bitkisel tanenler kullanan tabakhaneler seçiyoruz. Süreç daha yavaş (6-8 hafta vs 24 saat) ama deri biyolojik olarak bozunabilir, atık suyu daha az toksik.",
          stat: "%100",
          statLabel: "Bitkisel Tabaklanmış",
        },
        {
          icon: "water",
          label: "Su & Kimyasal",
          title: "Su Bazlı Boyalar",
          body: "Solvent bazlı boyalar yerine su bazlı formula kullanılıyor. Boyahane atık suyu arıtılmış olarak deşarj ediliyor; son 2 yılda su tüketimi atölye başına %40 düştü.",
          stat: "–40%",
          statLabel: "Su Tüketimi",
        },
        {
          icon: "co2",
          label: "İklim",
          title: "Karbon Dengeleme",
          body: "Her satılan çift için hesaplanan karbon ayak izi, onaylı orman projeleri aracılığıyla dengeleniyor. 2026'dan itibaren tedarik zinciri bazlı Scope 3 ölçümü başlıyoruz.",
          stat: "Net Sıfır",
          statLabel: "Hedef: 2028",
        },
        {
          icon: "groups",
          label: "İnsan",
          title: "Adil Ücret Politikası",
          body: "Tuscany atölyemizde bölge asgari ücretinin 1,4 katı ödeniyor. Tüm çalışanların sosyal sigortası tam; fazla mesai sözleşmeli ve gönüllü.",
          stat: "×1.4",
          statLabel: "Asgari Ücret Üzeri",
        },
      ];

  const timeline = en
    ? [
        { year: "2026", done: true, text: "Carbon offset programme launched" },
        { year: "2026", done: true, text: "100% vegetable-tanned leather adopted" },
        { year: "2027", done: false, text: "Recycled packaging materials" },
        { year: "2027", done: false, text: "Repair programme: 5-year free sole maintenance for every PALET KIDS product" },
        { year: "2028", done: false, text: "Supply chain Scope 3 Net Zero target" },
        { year: "2030", done: false, text: "Circular model: reprocessing end-of-life items" },
      ]
    : [
        { year: "2026", done: true, text: "Karbon dengeleme programı başladı" },
        { year: "2026", done: true, text: "%100 bitkisel tabaklanmış deri kullanımına geçildi" },
        { year: "2027", done: false, text: "Geri dönüştürülmüş ambalaj materialleri" },
        { year: "2027", done: false, text: "Onarım programı: her PALET KIDS ürünü için 5 yıl ücretsiz taban bakımı" },
        { year: "2028", done: false, text: "Tedarik zinciri Scope 3 Net Sıfır hedefi" },
        { year: "2030", done: false, text: "Döngüsel model: ömrünü tamamlayan çiftlerin yeniden işlenmesi" },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              {en ? "Sustainability" : "Sürdürülebilirlik"}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              {en ? (
                <>Long-Life<br /><span className="text-primary italic">Production.</span></>
              ) : (
                <>Uzun Ömürlü<br /><span className="text-primary italic">Üretim.</span></>
              )}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              {en
                ? "Sustainability for us means one thing: produce less, produce better. The exact opposite rhythm to fast fashion."
                : "Sürdürülebilirlik bize göre tek bir şey demek: daha az üretmek, daha iyi üretmek. Hızlı modanın tam tersi bir ritim."}
            </p>
          </div>
        </section>

        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="h-px bg-outline-variant" />
        </div>

        {/* 4 Pillars */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-surface-container-low p-12 group hover:bg-surface-container transition-colors"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container/40 transition-colors">
                        <span className="material-symbols-outlined text-primary">{p.icon}</span>
                      </div>
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        {p.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-2xl font-extrabold text-primary block">
                        {p.stat}
                      </span>
                      <span className="font-label text-xs text-on-surface-variant">
                        {p.statLabel}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">{p.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center">
            <blockquote className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-4xl mx-auto italic text-on-background">
              {en ? (
                <>&ldquo;The most sustainable shoe is one that can still be worn ten years from now.&rdquo;</>
              ) : (
                <>&ldquo;En sürdürülebilir ayakkabı, on yıl sonra hâlâ giyilebilen ayakkabıdır.&rdquo;</>
              )}
            </blockquote>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                {en ? "Roadmap" : "Yol Haritası"}
              </h2>
              <p className="text-on-surface-variant font-body">
                {en ? "Completed milestones and our commitments." : "Tamamlananlar ve taahhütlerimiz."}
              </p>
            </div>
            <div className="max-w-2xl space-y-1">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-8 p-8 ${
                    item.done
                      ? "bg-primary/5 border-l-2 border-primary"
                      : "bg-surface-container-low border-l-2 border-outline-variant"
                  }`}
                >
                  <div className="flex-shrink-0 w-14">
                    <span
                      className={`font-headline text-sm font-bold ${
                        item.done ? "text-primary" : "text-on-surface-variant"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <span
                      className={`material-symbols-outlined flex-shrink-0 ${
                        item.done ? "text-primary" : "text-outline"
                      }`}
                    >
                      {item.done ? "check_circle" : "radio_button_unchecked"}
                    </span>
                    <p
                      className={`font-body text-sm leading-relaxed ${
                        item.done ? "text-on-surface" : "text-on-surface-variant"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-headline text-3xl font-extrabold text-on-primary tracking-tighter italic mb-2">
                {en ? "Every piece is a commitment." : "Her çift bir taahhüt."}
              </p>
              <p className="text-on-primary/70 font-body">
                {en ? "Questions: info@paletkids.com" : "Sorularınız için info@paletkids.com"}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/koleksiyon"
                className="bg-on-primary text-primary px-8 py-4 font-label uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                {en ? "View Collection" : "Koleksiyonu Gör"}
              </Link>
              <Link
                href="/monograf"
                className="border-b border-on-primary/40 text-on-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                {en ? "Brand Story" : "Marka Hikayesi"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
