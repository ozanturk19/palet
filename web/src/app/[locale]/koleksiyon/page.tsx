import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Collection — PALET KIDS" : "Koleksiyon — PALET KIDS",
    description: en
      ? "The full PALET KIDS collection — leather jackets, leather vests and shoes. Sizes for ages 3–14."
      : "Tüm PALET KIDS koleksiyonu — deri ceket, deri yelek ve ayakkabı. 3–14 yaş beden seçenekleriyle.",
  };
}

function translateName(name: string): string {
  return name
    .replace("Deri Ceket", "Leather Jacket")
    .replace("Deri Yelek", "Leather Vest")
    .replace("Sneaker", "Sneaker");
}

function translateMaterial(material: string): string {
  if (material === "Çocuk dostu premium deri") return "Premium child-safe leather";
  if (material.startsWith("Deri detaylı sneaker")) {
    return material.replace("Deri detaylı sneaker", "Leather-detail sneaker");
  }
  return material;
}

function translateKategori(kategori: string): string {
  if (kategori === "ceket") return "Leather Jacket";
  if (kategori === "yelek") return "Leather Vest";
  if (kategori === "ayakkabi") return "Shoes";
  return kategori;
}

export default async function KoleksiyonPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  const locale = await getLocale();
  const en = locale === "en";
  const aktifKategori = searchParams.kategori ?? "";
  const filtered = aktifKategori
    ? products.filter((p) => p.kategori === aktifKategori)
    : products;

  const categories = en
    ? [
        { label: "All Products", value: "", href: "/koleksiyon", count: 6 },
        { label: "Leather Jacket", value: "ceket", href: "/koleksiyon?kategori=ceket", count: 2 },
        { label: "Leather Vest", value: "yelek", href: "/koleksiyon?kategori=yelek", count: 2 },
        { label: "Shoes", value: "ayakkabi", href: "/koleksiyon?kategori=ayakkabi", count: 2 },
      ]
    : [
        { label: "Tüm Ürünler", value: "", href: "/koleksiyon", count: 6 },
        { label: "Deri Ceket", value: "ceket", href: "/koleksiyon?kategori=ceket", count: 2 },
        { label: "Deri Yelek", value: "yelek", href: "/koleksiyon?kategori=yelek", count: 2 },
        { label: "Ayakkabı", value: "ayakkabi", href: "/koleksiyon?kategori=ayakkabi", count: 2 },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen">
        <header className="px-6 md:px-12 mb-16 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="section-label mb-4 block">
                {en ? "2026 Collection" : "2026 Koleksiyonu"}
              </span>
              <h1
                className="font-headline font-bold tracking-tight text-on-background leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                PALET <span className="text-primary italic">KIDS</span>
              </h1>
            </div>
            <p className="font-body text-on-surface-variant max-w-xs italic text-right">
              {en
                ? "Premium child-safe leather, in sizes for little ones."
                : "Çocuk dostu premium deri, küçük bedenler için."}
            </p>
          </div>
        </header>

        <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-40 space-y-12">
              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  {en ? "Categories" : "Kategoriler"}
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

              <div className="border-t border-outline-variant pt-10">
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-bold">
                  {en ? "Need Help?" : "Yardım?"}
                </h3>
                <p className="text-xs text-on-surface-variant font-body mb-4 leading-relaxed">
                  {en
                    ? "Size guidance, ordering or any questions — we're here."
                    : "Beden danışmanlığı, sipariş veya sorularınız için buradayız."}
                </p>
                <a
                  href="https://wa.me/905320000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  <span className="material-symbols-outlined text-base">chat_bubble</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 pb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
              {filtered.map((product, index) => (
                <Link
                  key={product.slug}
                  href={`/urun/${product.slug}`}
                  className="group block"
                >
                  <div
                    className={`relative overflow-hidden bg-surface-container ${
                      product.offset ? "mt-12" : ""
                    }`}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={product.img}
                        alt={en ? translateName(product.name) : product.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest px-3 py-1">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="pt-5 pb-8 px-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">
                          {en
                            ? translateKategori(product.kategori)
                            : product.kategori === "ceket"
                            ? "Deri Ceket"
                            : product.kategori === "yelek"
                            ? "Deri Yelek"
                            : "Ayakkabı"}
                        </span>
                        <h2 className="font-headline text-lg font-bold tracking-tight text-on-background group-hover:text-primary transition-colors">
                          {en ? translateName(product.name) : product.name}
                        </h2>
                        <p className="text-xs text-on-surface-variant font-body mt-1">
                          {en ? translateMaterial(product.material) : product.material}
                        </p>
                      </div>
                      <span className="font-headline text-lg font-bold text-primary flex-shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-outline-variant/30"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
