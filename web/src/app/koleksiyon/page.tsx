import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koleksiyon",
  description: "Tüm PALET KIDS koleksiyonu — deri ceket, deri yelek ve ayakkabı. 3–14 yaş beden seçenekleriyle.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";




const categories = [
  { label: "Tüm Ürünler", value: "",         href: "/koleksiyon",                  count: 6 },
  { label: "Deri Ceket",   value: "ceket",    href: "/koleksiyon?kategori=ceket",   count: 2 },
  { label: "Deri Yelek",   value: "yelek",    href: "/koleksiyon?kategori=yelek",   count: 2 },
  { label: "Ayakkabı",     value: "ayakkabi", href: "/koleksiyon?kategori=ayakkabi",count: 2 },
];

export default function KoleksiyonPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  const aktifKategori = searchParams.kategori ?? "";
  const filtered = aktifKategori
    ? products.filter((p) => p.kategori === aktifKategori)
    : products;

  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen">
        <header className="px-6 md:px-12 mb-16 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="section-label mb-4 block">2026 Koleksiyonu</span>
              <h1
                className="font-headline font-bold tracking-tight text-on-background leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                PALET <span className="text-primary italic">KIDS</span>
              </h1>
            </div>
            <p className="font-body text-on-surface-variant max-w-xs italic text-right">
              Çocuk dostu premium deri, küçük bedenler için.
            </p>
          </div>
        </header>

        <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-40 space-y-12">
              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  Kategoriler
                </h3>
                <ul className="space-y-3 font-body text-sm">
                  {categories.map((cat) => {
                    const isActive = cat.value === aktifKategori;
                    return (
                      <li key={cat.value}>
                        <Link
                          href={cat.href}
                          className={`flex justify-between items-center transition-colors ${
                            isActive
                              ? "text-primary font-bold"
                              : "text-on-surface-variant hover:text-primary"
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className="text-[10px]">{cat.count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  Beden (Yaş)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["3–4", "5–6", "7–8", "9–10", "11–12", "13–14"].map((size) => (
                    <button
                      key={size}
                      className="px-3 h-10 text-xs font-medium border border-transparent bg-surface-container-high hover:bg-surface-container-highest transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  Ayakkabı (EU)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[28, 30, 32, 34, 36, 37].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 text-xs font-medium border border-transparent bg-surface-container-high hover:bg-surface-container-highest"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Ürün grid */}
          <section className="flex-grow">
            {filtered.length === 0 ? (
              <p className="font-body text-on-surface-variant py-24 text-center">
                Bu kategoride ürün bulunamadı.
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
                {filtered.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/urun/${product.slug}`}
                    className={`group cursor-pointer ${product.offset ? "pt-12 md:pt-24" : ""}`}
                  >
                    <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-surface-container-low">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-warm-cream text-primary font-label text-[10px] uppercase tracking-widest px-3 py-1">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-headline font-semibold text-on-background group-hover:text-primary transition-colors">
                          {product.name}
                        </h2>
                        <p className="text-on-surface-variant text-sm mt-1">{product.material}</p>
                      </div>
                      <span className="text-lg font-headline font-light">{product.price}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-3 h-3 rounded-full border border-outline-variant/30"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
