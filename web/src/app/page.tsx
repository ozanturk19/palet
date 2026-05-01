import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "3–14 yaş çocuklar için el yapımı premium deri ceket, yelek ve ayakkabı. PALET KIDS ile çocuğunuzu hem rahat hem şık giydirin.",
  openGraph: {
    title: "PALET KIDS | Çocuklar için Premium Deri Giyim",
    description: "3–14 yaş çocuklar için el yapımı premium deri ceket, yelek ve ayakkabı.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex items-center bg-surface-container-low">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch min-h-[92vh]">

            {/* Sol: Metin */}
            <div className="md:col-span-5 flex flex-col justify-center py-24 pr-0 md:pr-12 z-10">
              <div className="animate-fade-up">
                <span className="section-label mb-8 block">PALETKIDS — 2026 Koleksiyonu</span>
              </div>
              <h1
                className="animate-fade-up-delay font-headline font-bold leading-[1.02] tracking-tight text-on-background mb-8"
                style={{ fontSize: "clamp(3.2rem, 6vw, 6rem)" }}
              >
                Küçük<br />
                <em className="text-primary not-italic">Bedenler,</em><br />
                Büyük&nbsp;Kalite.
              </h1>
              <p className="animate-fade-up-d2 font-body text-on-surface-variant text-lg leading-relaxed max-w-sm mb-10">
                Çocuğunuz için özenle seçilmiş, çocuk dostu premium deri. El işçiliğiyle
                üretilen ceket, yelek ve ayakkabılar — dayanıklı, şık, özgün.
              </p>
              <div className="animate-fade-up-d3 flex flex-wrap gap-5 items-center">
                <Link href="/koleksiyon" className="btn-primary">Koleksiyona Git</Link>
                <Link href="/monograf" className="group flex items-center gap-3 font-label text-[0.72rem] tracking-[0.16em] uppercase text-primary">
                  Hikayemiz
                  <span className="block h-px w-8 bg-primary group-hover:w-16 transition-all duration-300" />
                </Link>
              </div>

              {/* Küçük istatistikler */}
              <div className="animate-fade-in grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-outline-variant/40">
                {[
                  { v: "3–14", l: "Yaş aralığı" },
                  { v: "5 Renk", l: "Her modelde" },
                  { v: "2026", l: "Koleksiyon" },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <p className="font-headline text-3xl font-bold text-primary italic">{v}</p>
                    <p className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-on-surface-variant mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ: Fotoğraf */}
            <div className="md:col-span-7 relative animate-fade-in min-h-[500px]">
              {/* Ana görsel — tam yükseklik */}
              <div className="relative h-full min-h-[560px] md:min-h-full">
                <Image
                  src="/images/hero.jpg"
                  alt="PALETKIDS pembe çocuk dostu premium deri ceket giyen çocuk"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/60 via-transparent to-transparent md:hidden" />
              </div>

              {/* Floating badge — animate */}
              <div className="animate-badge absolute left-6 md:-left-10 bottom-12 bg-background shadow-xl px-6 py-5 border border-outline-variant/30">
                <p className="section-label mb-1">Öne Çıkan</p>
                <p className="font-headline text-xl font-bold text-primary leading-tight">Heritage<br />Ceket</p>
                <p className="font-body text-xs text-on-surface-variant mt-2">₺1.890'dan başlayan fiyatlarla</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
            <span className="font-label text-[0.6rem] tracking-[0.25em] uppercase text-primary">Kaydır</span>
            <span className="material-symbols-outlined text-primary text-lg">expand_more</span>
          </div>
        </section>

        {/* ── KATEGORİ SHOWCASE ── */}
        <section className="py-32 bg-background">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-16">
              <div>
                <span className="section-label mb-4 block">Koleksiyonlar</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight">
                  Üç kategori,<br /><em className="text-primary">bir obsesyon.</em>
                </h2>
              </div>
              <Link href="/koleksiyon" className="self-start md:self-auto group flex items-center gap-3 font-label text-[0.7rem] tracking-[0.18em] uppercase text-primary">
                Tümünü Gör
                <span className="block h-px w-6 bg-primary group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {[
                {
                  slug: "ceket",
                  img: "/images/category-ceket.jpg",
                  alt: "Çocuk çocuk dostu premium deri ceket",
                  no: "01", title: "Deri Ceket",
                  desc: "3–14 yaş · Çocuk dostu premium deri",
                  inner: "Heritage & Explorer serisi",
                },
                {
                  slug: "yelek",
                  img: "/images/category-yelek.jpg",
                  alt: "Çocuk çocuk dostu premium deri yelek",
                  no: "02", title: "Deri Yelek",
                  desc: "3–14 yaş · Hafif ve dayanıklı",
                  inner: "Classic & Journey serisi",
                  offset: true,
                },
                {
                  slug: "ayakkabi",
                  img: "/images/category-ayakkabi.jpg",
                  alt: "Çocuk sneaker ayakkabı",
                  no: "03", title: "Ayakkabı",
                  desc: "EU 28–37 · Deri detaylı sneaker",
                  inner: "Step & Trail serisi",
                },
              ].map(({ slug, img, alt, no, title, desc, inner, offset }) => (
                <Link key={slug} href={`/koleksiyon?kategori=${slug}`}
                  className={`group block ${offset ? "md:mt-16" : ""}`}>
                  <div className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-md mb-5 transition-shadow duration-300 group-hover:shadow-xl bg-surface-container">
                    <Image
                      src={img} alt={alt} fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-5 rounded-sm" />
                    <div className="absolute top-5 left-5">
                      <span className="font-logo text-white/50 text-[0.62rem] tracking-[3px]">N°{no}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-body text-white/60 text-[0.62rem] tracking-widest uppercase mb-1">{inner}</p>
                      <h3 className="font-headline text-3xl font-bold text-white italic">{title}</h3>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <p className="font-body text-on-surface-variant text-sm">{desc}</p>
                    <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARKA HİKAYESİ ── */}
        <section className="py-40 bg-surface-container-low">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

              {/* Sol: Fotoğraf */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-xl bg-surface-container">
                  <Image
                    src="/images/brand-story.jpg"
                    alt="PALETKIDS koleksiyon modeli"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                {/* Fiyat etiketi */}
                <div className="absolute -right-4 md:-right-8 top-10 bg-primary text-on-primary px-6 py-5 shadow-lg">
                  <p className="font-label text-[0.62rem] tracking-widest opacity-80 uppercase">Başlayan fiyat</p>
                  <p className="font-headline text-2xl font-bold">₺1.890</p>
                </div>
                {/* Küçük dekor */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-warm-cream border border-primary/20 px-6 py-4 max-w-[180px]">
                  <p className="section-label mb-1">Öne Çıkan</p>
                  <p className="font-headline text-lg font-bold text-primary leading-tight">Heritage Ceket</p>
                </div>
              </div>

              {/* Sağ: Metin */}
              <div className="md:col-span-6 md:col-start-7 pt-8 md:pt-0">
                <span className="section-label mb-6 block">Neden PALETKIDS?</span>
                <h2 className="font-headline font-bold tracking-tight leading-[1.05] mb-10"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}>
                  Özenle Seçilmiş,<br />
                  <em className="text-primary">Çocuklar İçin</em><br />
                  Tasarlandı.
                </h2>
                <div className="space-y-5 font-body text-on-surface-variant leading-relaxed text-[1.05rem]">
                  <p>
                    PALETKIDS, bir inançla kuruldu: çocuklar da büyükler gibi
                    kaliteli ve özenli tasarımı hak ediyor.
                  </p>
                  <p>
                    Her ürünümüz butik atölyelerde üretilen, özel dokulu premium
                    doğal işlemli premium deriyle yapılır. Çevre dostu, uzun ömürlü, her çocuğun
                    tarzına uygun.
                  </p>
                </div>
                <Link href="/monograf"
                  className="mt-10 group flex items-center gap-4 font-label text-[0.72rem] tracking-[0.18em] uppercase text-primary">
                  Hikayeyi Oku
                  <span className="block h-px w-10 bg-primary group-hover:w-24 transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── KALİTE BLOKLARI ── */}
        <section className="py-32 bg-surface-container">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="section-label mb-4 block">Fark Yaratanlar</span>
              <h2 className="font-headline text-5xl font-bold tracking-tight">Neden Biz?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "I",   title: "Çocuk Dostu Premium Deri", desc: "Özel dokulu, nefes alan kumaş — hareketle birlikte şekil alır, yıkanabilir ve dayanıklıdır." },
                { num: "II",  title: "Çocuk Dostu Tasarım", desc: "Özgür hareket için özel kalıp. Fermuar ve tokaların tamamı çocuk güvenliğine uygun, yumuşak kenar bitiş." },
                { num: "III", title: "Uzun Ömürlü Kalite",  desc: "Bir sezon değil, yıllarca giyilir. Doğru bakımla kardeşten kardeşe geçer — en akıllı yatırım." },
              ].map((c) => (
                <div key={c.num} className="bg-surface-container-lowest p-10 group hover:bg-white transition-colors duration-300 border-b-2 border-transparent hover:border-primary">
                  <p className="font-logo text-5xl text-primary/15 mb-6 group-hover:text-primary/30 transition-colors">{c.num}</p>
                  <h3 className="font-headline text-2xl font-bold mb-4">{c.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LİFESTYLE BANT ── */}
        <section className="py-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-[460px]">
            <div className="relative overflow-hidden group">
              <Image
                src="/images/lifestyle-1.jpg"
                alt="PALETKIDS lifestyle"
                fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10">
                <p className="font-headline text-white text-3xl font-bold italic">Sokak Stili</p>
                <p className="font-body text-white/70 text-sm mt-1">Ayakkabı Koleksiyonu</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="PALETKIDS lifestyle"
                fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10">
                <p className="font-headline text-white text-3xl font-bold italic">Editöryal</p>
                <p className="font-body text-white/70 text-sm mt-1">Yeni Sezon Lookbook</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-36 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-64 h-64 rounded-full border border-white/10" />
          <div className="relative z-10 px-6 md:px-16 max-w-[1920px] mx-auto text-center">
            <span className="font-label text-[0.7rem] tracking-[0.25em] uppercase text-white/50 mb-6 block">Koleksiyonu Keşfet</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-on-primary tracking-tight leading-[1.05] italic mb-8">
              Çocuğunuz için<br />en iyisi.
            </h2>
            <p className="font-body text-on-primary/65 text-lg mb-12 max-w-sm mx-auto">
              3 yaşından 14 yaşına. Çocuk dostu premium deri ceket, yelek ve ayakkabı.
            </p>
            <Link href="/koleksiyon"
              className="inline-block bg-on-primary text-primary px-14 py-5 font-label text-[0.72rem] tracking-[0.22em] uppercase hover:scale-105 transition-transform duration-200 shadow-lg">
              Koleksiyonu Keşfet
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
