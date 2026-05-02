import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEn = locale === "en";
  return {
    title: isEn ? "Home" : "Anasayfa",
    description: isEn
      ? "Timeless pieces for little ones. Handcrafted premium leather jackets, vests and shoes for children aged 3–14."
      : "3–14 yaş çocuklar için el yapımı premium deri ceket, yelek ve ayakkabı. PALET KIDS ile çocuğunuzu hem rahat hem şık giydirin.",
    openGraph: {
      images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  const en = locale === "en";

  const categories = [
    {
      slug: "ceket",
      img: "/images/category-ceket.jpg",
      alt: en ? "Premium kids leather jacket" : "Çocuk çocuk dostu premium deri ceket",
      no: "01",
      title: en ? "Leather Jacket" : "Deri Ceket",
      desc: en ? "Ages 3–14 · Premium child-safe leather" : "3–14 yaş · Çocuk dostu premium deri",
      inner: en ? "Heritage & Explorer series" : "Heritage & Explorer serisi",
    },
    {
      slug: "yelek",
      img: "/images/category-yelek.jpg",
      alt: en ? "Premium kids leather vest" : "Çocuk çocuk dostu premium deri yelek",
      no: "02",
      title: en ? "Leather Vest" : "Deri Yelek",
      desc: en ? "Ages 3–14 · Lightweight & durable" : "3–14 yaş · Hafif ve dayanıklı",
      inner: en ? "Classic & Journey series" : "Classic & Journey serisi",
      offset: true,
    },
    {
      slug: "ayakkabi",
      img: "/images/category-ayakkabi.jpg",
      alt: en ? "Kids sneaker shoes" : "Çocuk sneaker ayakkabı",
      no: "03",
      title: en ? "Shoes" : "Ayakkabı",
      desc: en ? "EU 28–37 · Leather detail sneakers" : "EU 28–37 · Deri detaylı sneaker",
      inner: en ? "Step & Trail series" : "Step & Trail serisi",
    },
  ];

  const qualities = en
    ? [
        { num: "I",   title: "Premium Child-Safe Leather", desc: "Specially textured, breathable — shapes with movement, washable and durable." },
        { num: "II",  title: "Child-Friendly Design", desc: "Special fit for freedom of movement. All zippers and buckles meet child safety standards, soft edge finishing." },
        { num: "III", title: "Built to Last", desc: "Not just one season — designed to be worn for years. Passed from sibling to sibling with proper care." },
      ]
    : [
        { num: "I",   title: "Çocuk Dostu Premium Deri", desc: "Özel dokulu, nefes alan kumaş — hareketle birlikte şekil alır, yıkanabilir ve dayanıklıdır." },
        { num: "II",  title: "Çocuk Dostu Tasarım", desc: "Özgür hareket için özel kalıp. Fermuar ve tokaların tamamı çocuk güvenliğine uygun, yumuşak kenar bitiş." },
        { num: "III", title: "Uzun Ömürlü Kalite", desc: "Bir sezon değil, yıllarca giyilir. Doğru bakımla kardeşten kardeşe geçer — en akıllı yatırım." },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-20 overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex items-center bg-surface-container-low">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch min-h-[92vh]">
            <div className="md:col-span-5 flex flex-col justify-center py-24 pr-0 md:pr-12 z-10">
              <div className="animate-fade-up">
                <span className="section-label mb-8 block">
                  {en ? "PALET KIDS — 2026 Collection" : "PALETKIDS — 2026 Koleksiyonu"}
                </span>
              </div>
              <h1
                className="animate-fade-up-delay font-headline font-bold leading-[1.02] tracking-tight text-on-background mb-8"
                style={{ fontSize: "clamp(3.2rem, 6vw, 6rem)" }}
              >
                {en ? (
                  <>Timeless<br /><em className="text-primary not-italic">Pieces</em><br />for Little&nbsp;Ones.</>
                ) : (
                  <>Küçük<br /><em className="text-primary not-italic">Bedenler,</em><br />Büyük&nbsp;Kalite.</>
                )}
              </h1>
              <p className="animate-fade-up-d2 font-body text-on-surface-variant text-lg leading-relaxed max-w-sm mb-10">
                {en
                  ? "Crafted from the source, made to last beyond childhood."
                  : "Çocuğunuz için özenle seçilmiş, çocuk dostu premium deri. El işçiliğiyle üretilen ceket, yelek ve ayakkabılar — dayanıklı, şık, özgün."}
              </p>
              <div className="animate-fade-up-d3 flex flex-wrap gap-5 items-center">
                <Link href="/koleksiyon" className="btn-primary">
                  {en ? "Explore Collection" : "Koleksiyona Git"}
                </Link>
                <Link href="/monograf" className="group flex items-center gap-3 font-label text-[0.72rem] tracking-[0.16em] uppercase text-primary">
                  {en ? "Our Story" : "Hikayemiz"}
                  <span className="block h-px w-8 bg-primary group-hover:w-16 transition-all duration-300" />
                </Link>
              </div>
              <div className="animate-fade-in grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-outline-variant/40">
                {(en
                  ? [{ v: "3–14", l: "Age range" }, { v: "5 Colors", l: "Per model" }, { v: "2026", l: "Collection" }]
                  : [{ v: "3–14", l: "Yaş aralığı" }, { v: "5 Renk", l: "Her modelde" }, { v: "2026", l: "Koleksiyon" }]
                ).map(({ v, l }) => (
                  <div key={l}>
                    <p className="font-headline text-3xl font-bold text-primary italic">{v}</p>
                    <p className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-on-surface-variant mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 relative animate-fade-in min-h-[500px]">
              <div className="relative h-full min-h-[560px] md:min-h-full">
                <Image
                  src="/images/hero.jpg"
                  alt={en ? "PALET KIDS premium kids leather jacket" : "PALETKIDS pembe çocuk dostu premium deri ceket giyen çocuk"}
                  fill className="object-cover object-center" priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/60 via-transparent to-transparent md:hidden" />
              </div>
              <div className="animate-badge absolute left-6 md:-left-10 bottom-12 bg-background shadow-xl px-6 py-5 border border-outline-variant/30">
                <p className="section-label mb-1">{en ? "Featured" : "Öne Çıkan"}</p>
                <p className="font-headline text-xl font-bold text-primary leading-tight">
                  {en ? "Heritage\nJacket" : "Heritage\nCeket"}
                </p>
                <p className="font-body text-xs text-on-surface-variant mt-2">
                  {en ? "From ₺1.890" : "₺1.890'dan başlayan fiyatlarla"}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
            <span className="font-label text-[0.6rem] tracking-[0.25em] uppercase text-primary">
              {en ? "Scroll" : "Kaydır"}
            </span>
            <span className="material-symbols-outlined text-primary text-lg">expand_more</span>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="py-32 bg-background">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-16">
              <div>
                <span className="section-label mb-4 block">
                  {en ? "Collections" : "Koleksiyonlar"}
                </span>
                <h2 className="font-headline text-5xl font-bold tracking-tight">
                  {en ? <>Three categories,<br /><em className="text-primary">one obsession.</em></> : <>Üç kategori,<br /><em className="text-primary">bir obsesyon.</em></>}
                </h2>
              </div>
              <Link href="/koleksiyon" className="self-start md:self-auto group flex items-center gap-3 font-label text-[0.7rem] tracking-[0.18em] uppercase text-primary">
                {en ? "See All" : "Tümünü Gör"}
                <span className="block h-px w-6 bg-primary group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {categories.map(({ slug, img, alt, no, title, desc, inner, offset }) => (
                <Link key={slug} href={`/koleksiyon?kategori=${slug}`}
                  className={`group block ${offset ? "md:mt-16" : ""}`}>
                  <div className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-md mb-5 transition-shadow duration-300 group-hover:shadow-xl bg-surface-container">
                    <Image src={img} alt={alt} fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw" />
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

        {/* ── BRAND STORY ── */}
        <section className="py-40 bg-surface-container-low">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-xl bg-surface-container">
                  <Image src="/images/brand-story.jpg" alt={en ? "PALET KIDS atelier" : "PALETKIDS koleksiyon modeli"} fill
                    className="object-cover object-top" sizes="(max-width: 768px) 100vw, 40vw" />
                </div>
                <div className="absolute -right-4 md:-right-8 top-10 bg-primary text-on-primary px-6 py-5 shadow-lg">
                  <p className="font-label text-[0.62rem] tracking-widest opacity-80 uppercase">
                    {en ? "Starting from" : "Başlayan fiyat"}
                  </p>
                  <p className="font-headline text-2xl font-bold">₺1.890</p>
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-warm-cream border border-primary/20 px-6 py-4 max-w-[180px]">
                  <p className="section-label mb-1">{en ? "Featured" : "Öne Çıkan"}</p>
                  <p className="font-headline text-lg font-bold text-primary leading-tight">
                    {en ? "Heritage Jacket" : "Heritage Ceket"}
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-7 pt-8 md:pt-0">
                <span className="section-label mb-6 block">
                  {en ? "Why PALET KIDS?" : "Neden PALETKIDS?"}
                </span>
                <h2 className="font-headline font-bold tracking-tight leading-[1.05] mb-10"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}>
                  {en ? (
                    <>From Pallet<br /><em className="text-primary">to Product.</em></>
                  ) : (
                    <>Özenle Seçilmiş,<br /><em className="text-primary">Çocuklar İçin</em><br />Tasarlandı.</>
                  )}
                </h2>
                <div className="space-y-5 font-body text-on-surface-variant leading-relaxed text-[1.05rem]">
                  {en ? (
                    <>
                      <p>PALET KIDS was founded on a belief: children deserve the same quality and care as adults.</p>
                      <p>From raw material to lasting memories. Each piece handcrafted in boutique ateliers using premium natural leather — durable, stylish, original.</p>
                    </>
                  ) : (
                    <>
                      <p>PALETKIDS, bir inançla kuruldu: çocuklar da büyükler gibi kaliteli ve özenli tasarımı hak ediyor.</p>
                      <p>Her ürünümüz butik atölyelerde üretilen, özel dokulu doğal işlemli premium deriyle yapılır. Çevre dostu, uzun ömürlü, her çocuğun tarzına uygun.</p>
                    </>
                  )}
                </div>
                <Link href="/monograf"
                  className="mt-10 group flex items-center gap-4 font-label text-[0.72rem] tracking-[0.18em] uppercase text-primary">
                  {en ? "Read Our Story" : "Hikayeyi Oku"}
                  <span className="block h-px w-10 bg-primary group-hover:w-24 transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUALITY ── */}
        <section className="py-32 bg-surface-container">
          <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="section-label mb-4 block">
                {en ? "What sets us apart" : "Fark Yaratanlar"}
              </span>
              <h2 className="font-headline text-5xl font-bold tracking-tight">
                {en ? "Why Us?" : "Neden Biz?"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualities.map((c) => (
                <div key={c.num} className="bg-surface-container-lowest p-10 group hover:bg-white transition-colors duration-300 border-b-2 border-transparent hover:border-primary">
                  <p className="font-logo text-5xl text-primary/15 mb-6 group-hover:text-primary/30 transition-colors">{c.num}</p>
                  <h3 className="font-headline text-2xl font-bold mb-4">{c.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIFESTYLE BAND ── */}
        <section className="py-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-[460px]">
            {[
              { src: "/images/lifestyle-1.jpg", title: en ? "Street Style" : "Sokak Stili", sub: en ? "Shoes Collection" : "Ayakkabı Koleksiyonu" },
              { src: "/images/lifestyle-2.jpg", title: en ? "Editorial" : "Editöryal", sub: en ? "New Season Lookbook" : "Yeni Sezon Lookbook" },
            ].map(({ src, title, sub }) => (
              <div key={src} className="relative overflow-hidden group">
                <Image src={src} alt={title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-10 left-10">
                  <p className="font-headline text-white text-3xl font-bold italic">{title}</p>
                  <p className="font-body text-white/70 text-sm mt-1">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-36 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 rounded-full border border-white/10" />
          <div className="relative z-10 px-6 md:px-16 max-w-[1920px] mx-auto text-center">
            <span className="font-label text-[0.7rem] tracking-[0.25em] uppercase text-white/50 mb-6 block">
              {en ? "Explore Collection" : "Koleksiyonu Keşfet"}
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-on-primary tracking-tight leading-[1.05] italic mb-8">
              {en ? <>The best<br />for your child.</> : <>Çocuğunuz için<br />en iyisi.</>}
            </h2>
            <p className="font-body text-on-primary/65 text-lg mb-12 max-w-sm mx-auto">
              {en
                ? "Ages 3 to 14. Premium leather jackets, vests and shoes."
                : "3 yaşından 14 yaşına. Çocuk dostu premium deri ceket, yelek ve ayakkabı."}
            </p>
            <Link href="/koleksiyon"
              className="inline-block bg-on-primary text-primary px-14 py-5 font-label text-[0.72rem] tracking-[0.22em] uppercase hover:scale-105 transition-transform duration-200 shadow-lg">
              {en ? "Explore Collection" : "Koleksiyonu Keşfet"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
