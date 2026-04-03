import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik — PALLET",
  description:
    "PALLET'in çevresel ve sosyal sorumluluk yaklaşımı. Vegetable-tanned deri, karbon dengeleme ve adil ücret politikası.",
};

const pillars = [
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

const timeline = [
  { year: "2026", done: true, text: "Karbon dengeleme programı başladı" },
  { year: "2026", done: true, text: "%100 bitkisel tabaklanmış deri kullanımına geçildi" },
  { year: "2027", done: false, text: "Geri dönüştürülmüş ambalaj materialleri" },
  { year: "2027", done: false, text: "Onarım programı: her PALLET çifti için 5 yıl ücretsiz taban bakımı" },
  { year: "2028", done: false, text: "Tedarik zinciri Scope 3 Net Sıfır hedefi" },
  { year: "2030", done: false, text: "Döngüsel model: ömrünü tamamlayan çiftlerin yeniden işlenmesi" },
];

export default function SurdurulebilirlikPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              Sürdürülebilirlik — PALLET
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              Uzun Ömürlü <br />
              <span className="text-primary italic">Üretim.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              Sürdürülebilirlik bize göre tek bir şey demek: daha az üretmek,
              daha iyi üretmek. Hızlı modanın tam tersi bir ritim.
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
                        <span className="material-symbols-outlined text-primary">
                          {p.icon}
                        </span>
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
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center">
            <blockquote className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-4xl mx-auto italic text-on-background">
              &ldquo;En sürdürülebilir ayakkabı, on yıl sonra hâlâ
              giyilebilen ayakkabıdır.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                Yol Haritası
              </h2>
              <p className="text-on-surface-variant font-body">
                Tamamlananlar ve taahhütlerimiz.
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
                Her çift bir taahhüt.
              </p>
              <p className="text-on-primary/70 font-body">
                Sorularınız için hello@pallet.com.tr
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/koleksiyon"
                className="bg-on-primary text-primary px-8 py-4 font-label uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Koleksiyonu Gör
              </Link>
              <Link
                href="/monograf"
                className="border-b border-on-primary/40 text-on-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                Marka Hikayesi
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
