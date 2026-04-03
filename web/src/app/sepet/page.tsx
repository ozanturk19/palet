import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İlgi Listem — PALLET",
  description:
    "Beğendiğin PALLET çiftlerini kaydet, koleksiyon satışa açıldığında ilk sen haber al.",
};

const items = [
  {
    src: "/images/cart-product-1.jpg",
    name: "Suede Loafers in Sand",
    material: "İtalyan Dana Süet · Deri Taban",
    price: "₺2.690",
  },
  {
    src: "/images/product-1.jpg",
    name: "Elysian Chelsea Boot",
    material: "Deep Tobacco Süet · Limited",
    price: "₺3.290",
  },
];

export default function SepetPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen">
        <header className="mb-16 max-w-xl">
          <span className="font-label text-xs uppercase tracking-widest text-primary mb-4 block">
            İlgi Listesi
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-6">
            Seçkini kaydet.
          </h1>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Koleksiyon henüz satışta değil. Beğendiğin çiftleri işaretle —
            satışa açıldığında ilk sen haber al.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Ürünler */}
          <div className="lg:col-span-7 space-y-6">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex gap-8 items-center bg-surface-container-low p-6"
              >
                <div className="w-28 aspect-[4/5] bg-surface-container overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-bold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm mb-3">
                    {item.material}
                  </p>
                  <span className="font-headline text-primary font-bold">
                    {item.price}
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">
                  favorite
                </span>
              </div>
            ))}

            <Link
              href="/koleksiyon"
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mt-4"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Koleksiyona Dön
            </Link>
          </div>

          {/* Bildirim formu */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-low p-10 sticky top-32">
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-3">
                Satış Başlayınca Haber Al
              </h2>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
                E-postanı bırak. Koleksiyon satışa açıldığında —
                ve yalnızca o zaman — sana yazacağız.
              </p>
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm"
                  />
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  Beni Haberdar Et
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
              </form>
              <p className="mt-6 text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50 text-center">
                Spam yok. İstediğin zaman çıkabilirsin.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
