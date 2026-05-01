import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: product.name,
    description: product.name + " — Cocuk dostu premium deri. " + product.price + ". PALET KIDS koleksiyonundan.",
    openGraph: {
      title: product.name,
      description: product.name + " — " + product.material,
      images: [{ url: product.img }],
    },
  };
}

export default function UrunDetayPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const p = product!;
  const related = products.filter((item) => item.slug !== p.slug).slice(0, 3);
  const [main, sec1, sec2] = p.gallery;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Görseller */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 overflow-hidden aspect-[4/5] bg-surface-container relative">
              <Image src={main} alt={p.name} fill className="object-cover object-top" priority
                sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-4 relative">
              <Image src={sec1} alt={`${p.name} detay`} fill className="object-cover object-top"
                sizes="30vw" />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-12 relative">
              <Image src={sec2} alt={`${p.name} stil`} fill className="object-cover object-top"
                sizes="30vw" />
            </div>
          </div>

          {/* Detaylar */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="section-label">
                  {p.kategori === "ceket" ? "Deri Ceket" : p.kategori === "yelek" ? "Deri Yelek" : "Ayakkabı"} — 2026
                </span>
                <h1 className="font-headline font-bold tracking-tight text-on-background"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}>
                  {p.name}
                </h1>
                <p className="text-2xl font-headline text-primary font-semibold">{p.price},00</p>
              </div>

              <div className="space-y-4 py-8 border-y border-outline-variant/20">
                <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                  Özel atölyede üretilmiş {p.name.toLowerCase()}.
                  Çocuk dostu premium deri, yumuşak iç astar, güvenli fermuar
                  ve çocukların özgür hareket edebileceği özel kalıp. 3–14 yaş.
                </p>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="text-sm font-label uppercase tracking-wider text-on-surface">
                    {p.material}
                  </span>
                </div>
              </div>

              <div className="space-y-10">
                {/* Renk */}
                <div className="space-y-4">
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Renk Seçenekleri</span>
                  <div className="flex gap-3">
                    {p.colors.map((color, i) => (
                      <button key={color} title={color}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          i === 0 ? "border-primary ring-2 ring-offset-2 ring-primary/30" : "border-transparent hover:border-outline-variant"
                        }`}
                        style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>

                {/* Beden */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                      {p.kategori === "ayakkabi" ? "Numara (EU)" : "Beden (Yaş)"}
                    </span>
                    <button className="text-xs font-label uppercase tracking-widest text-primary underline underline-offset-4">
                      Beden Rehberi
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {p.kategori === "ayakkabi"
                      ? [28,30,32,34,36,37].map((s) => (
                          <button key={s}
                            className={`py-3 text-sm font-body transition-all ${
                              s === 32 ? "border border-primary font-bold" : "border border-outline-variant/30 hover:bg-surface-container"
                            }`}>{s}</button>
                        ))
                      : ["3–4","5–6","7–8","9–10","11–12","13–14"].map((s) => (
                          <button key={s}
                            className={`py-3 text-sm font-body transition-all ${
                              s === "7–8" ? "border border-primary font-bold" : "border border-outline-variant/30 hover:bg-surface-container"
                            }`}>{s}</button>
                        ))
                    }
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <a
                    href={"https://wa.me/905320000000?text=Merhaba%2C%20" + encodeURIComponent(p.name) + "%20hakkinda%20bilgi%20almak%20istiyorum."}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-primary text-on-primary font-label uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined text-lg">chat_bubble</span>
                    WhatsApp ile Sipariş Ver
                  </a>
                  <a
                    href="/iletisim"
                    className="w-full py-4 border border-primary text-primary font-label uppercase tracking-widest text-sm font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-3"
                  >
                    Bilgi Al / Ön Kayıt
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </a>
                  <p className="text-center text-xs text-on-surface-variant font-body">
                    Ücretsiz kargo · 30 gün iade garantisi · Güvenli teslimat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İlgili ürünler */}
        <section className="mt-48 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Bunları da Sevebilirsiniz</h2>
            <div className="h-px w-16 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item, i) => (
              <Link key={item.slug} href={`/urun/${item.slug}`}
                className={`group cursor-pointer ${i === 1 ? "md:translate-y-12" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 relative">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="33vw" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="section-label mb-1">{item.kategori === "ceket" ? "Deri Ceket" : item.kategori === "yelek" ? "Deri Yelek" : "Ayakkabı"}</p>
                    <h3 className="font-headline text-lg font-bold">{item.name}</h3>
                  </div>
                  <p className="font-headline text-primary">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
