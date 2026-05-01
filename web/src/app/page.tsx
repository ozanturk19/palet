import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Hero */}
        <section className="relative min-h-[860px] flex items-center px-6 md:px-12 py-20 overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-5 z-10">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                PALETKIDS — 2026 Koleksiyonu
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-8">
                Küçük<br />
                <span className="text-primary italic">Bedenler,</span><br />
                Büyük Kalite.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed font-body">
                Çocuğunuz için gerçek deri. El işçiliğiyle üretilen ceket,
                yelek ve ayakkabılar — dayanıklı, şık, doğal.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/koleksiyon"
                  className="bg-primary text-on-primary px-10 py-4 rounded-none hover:opacity-90 transition-all font-label uppercase tracking-widest text-sm"
                >
                  Koleksiyona Git
                </Link>
                <Link
                  href="/monograf"
                  className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                >
                  Hikayemiz
                </Link>
              </div>
            </div>

            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden relative">
                <Image
                  src="/images/hero-kids.jpg"
                  alt="PALETKIDS çocuk deri ceket koleksiyonu"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-10 -left-10 md:-left-20 bg-surface-container-lowest p-10 max-w-xs hidden md:block shadow-sm">
                <span className="font-headline text-2xl font-bold text-primary block mb-2">
                  Heritage Ceket
                </span>
                <p className="text-sm text-on-surface-variant font-body">
                  Gerçek İtalyan deri. 3–14 yaş arası.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kategori Showcase */}
        <section className="py-32 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter">
                  Koleksiyonlar
                </h2>
                <p className="text-on-surface-variant mt-2 font-body">
                  Üç ürün kategorisi, tek bir obsesyon: gerçek deri kalitesi.
                </p>
              </div>
              <Link
                href="/koleksiyon"
                className="text-primary font-label uppercase tracking-widest text-sm border-b border-primary/20 hover:border-primary transition-all"
              >
                Tümünü Gör
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Deri Ceket */}
              <Link href="/koleksiyon?kategori=ceket" className="group cursor-pointer">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-[3/4]">
                  <Image
                    src="/images/category-ceket.jpg"
                    alt="Çocuk Deri Ceket"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="font-label text-xs uppercase tracking-widest text-white/70 block mb-2">
                      Koleksiyon 01
                    </span>
                    <h3 className="font-headline text-3xl font-bold text-white">
                      Deri Ceket
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-on-surface-variant text-sm font-body">
                    3–14 yaş · Gerçek İtalyan deri
                  </p>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Deri Yelek */}
              <Link href="/koleksiyon?kategori=yelek" className="group cursor-pointer md:mt-16">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-[3/4]">
                  <Image
                    src="/images/category-yelek.jpg"
                    alt="Çocuk Deri Yelek"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="font-label text-xs uppercase tracking-widest text-white/70 block mb-2">
                      Koleksiyon 02
                    </span>
                    <h3 className="font-headline text-3xl font-bold text-white">
                      Deri Yelek
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-on-surface-variant text-sm font-body">
                    3–14 yaş · Hafif ve dayanıklı
                  </p>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Ayakkabı */}
              <Link href="/koleksiyon?kategori=ayakkabi" className="group cursor-pointer">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-[3/4]">
                  <Image
                    src="/images/category-ayakkabi.jpg"
                    alt="Çocuk Deri Ayakkabı"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="font-label text-xs uppercase tracking-widest text-white/70 block mb-2">
                      Koleksiyon 03
                    </span>
                    <h3 className="font-headline text-3xl font-bold text-white">
                      Ayakkabı
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-on-surface-variant text-sm font-body">
                    EU 28–37 · Sneaker tarzı deri
                  </p>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Marka Hikayesi */}
        <section className="py-40 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-6 relative">
                <div className="w-4/5 aspect-[3/4] bg-surface-container overflow-hidden relative">
                  <Image
                    src="/images/featured-jacket.jpg"
                    alt="Heritage Deri Ceket"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-8 -right-4 md:-right-12 bg-primary text-on-primary p-8">
                  <span className="font-label text-xs uppercase tracking-widest block mb-1">
                    Öne Çıkan
                  </span>
                  <span className="font-headline text-2xl font-bold block">
                    Heritage Ceket
                  </span>
                  <span className="font-body text-sm opacity-80 block mt-2">
                    ₺1.890&apos;dan başlayan fiyatlarla
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                  Neden PALETKIDS?
                </span>
                <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8">
                  Gerçek Deri,<br />Gerçek Çocuklar İçin
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-body">
                  <p>
                    PALETKIDS, bir inançla kuruldu: çocuklar da büyükler gibi
                    kaliteli malzemeyi hak ediyor. Plastik değil, gerçek deri.
                  </p>
                  <p>
                    Her ürünümüz İtalya&apos;dan tedarik edilen tam tahıl deriyle
                    üretilir. Büyüdükçe daha da güzel yaşlanır — tıpkı iyi
                    bir hikaye gibi.
                  </p>
                </div>
                <Link
                  href="/monograf"
                  className="mt-12 group flex items-center gap-4 font-label uppercase tracking-widest text-sm text-primary"
                >
                  Hikayeyi Oku
                  <span className="w-12 h-px bg-primary group-hover:w-20 transition-all inline-block" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Kalite Özellikleri */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-headline text-4xl font-bold mb-4 tracking-tighter">
                Neden Deri?
              </h2>
              <p className="text-on-surface-variant font-body">
                Sentetik değil, doğal. Çocukların aktif hayatına uygun, uzun ömürlü.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "verified",
                  title: "Gerçek Tam Tahıl Deri",
                  desc: "İtalya kaynaklı, tam tahıl deri — nefes alır, hareketle birlikte şekil alır ve yıllar içinde güzelleşir.",
                },
                {
                  icon: "child_care",
                  title: "Çocuk Dostu Tasarım",
                  desc: "Çocukların özgür hareket edebilmesi için özel kalıp. Fermuar ve tokaların hepsi güvenli, yumuşak kenar bitiş.",
                },
                {
                  icon: "autorenew",
                  title: "Uzun Ömürlü",
                  desc: "Bir sezon değil, yıllarca giyilir. Doğru bakımla kardeşten kardeşe geçer — en iyi yatırım.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-surface-container-lowest p-12 text-center border-b-2 border-transparent hover:border-primary transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 textural-gradient" />
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center relative z-10">
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-primary tracking-tighter mb-6 italic">
              Çocuğunuz için en iyisi.
            </h2>
            <p className="text-on-primary/70 font-body text-lg mb-10 max-w-md mx-auto">
              3 yaşından 14 yaşına. Deri ceket, yelek ve ayakkabı koleksiyonu.
            </p>
            <Link
              href="/koleksiyon"
              className="inline-block bg-on-primary text-primary px-12 py-5 rounded-none font-label uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform"
            >
              Koleksiyonu Keşfet
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
