import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function UrunDetayPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Görseller */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 overflow-hidden aspect-[4/5] bg-surface-container relative">
              <Image
                src="/images/detail-1.jpg"
                alt="Premium tan süet derby ayakkabı"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-4 relative">
              <Image
                src="/images/detail-2.jpg"
                alt="Süet doku detayı"
                fill
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-12 relative">
              <Image
                src="/images/detail-3.jpg"
                alt="Taban detayı"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Detaylar */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-label tracking-widest uppercase text-tertiary-container">
                  Heritage Collection
                </span>
                <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter text-on-background">
                  The Suede Derby
                </h1>
                <p className="text-2xl font-body text-primary font-semibold">₺2.890,00</p>
              </div>

              <div className="space-y-6 py-8 border-y border-outline-variant/20">
                <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                  Premium İtalyan süetinden titizlikle üretilmiş Derby, dokunsal lüksün zirvesini
                  temsil eder. Blake-dikişli deri taban ve nefes alan dana derisi astarıyla
                  yürüyüşünüze uyum sağlayan eldiven gibi bir deneyim sunar.
                </p>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                  <span className="text-sm font-label uppercase tracking-wider text-on-surface">
                    Sorumlu Kaynaklı Süet
                  </span>
                </div>
              </div>

              <div className="space-y-10">
                {/* Renk */}
                <div className="space-y-4">
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    Renk: Apricot
                  </span>
                  <div className="flex gap-3">
                    {[
                      { color: "#e69b73", title: "Apricot", active: true },
                      { color: "#c5a881", title: "Sand", active: false },
                      { color: "#5d4037", title: "Chocolate", active: false },
                    ].map((c) => (
                      <button
                        key={c.title}
                        title={c.title}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          c.active
                            ? "border-primary ring-2 ring-offset-2 ring-transparent"
                            : "border-transparent hover:border-outline-variant"
                        }`}
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Numara */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                      Numara Seç (EU)
                    </span>
                    <button className="text-xs font-label uppercase tracking-widest text-primary underline underline-offset-4">
                      Numara Rehberi
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
                      <button
                        key={size}
                        className={`py-3 text-sm font-body transition-all ${
                          size === 42
                            ? "border border-primary bg-surface-container-high font-bold"
                            : "border border-outline-variant/30 hover:bg-surface-container"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <button className="w-full py-5 bg-primary text-on-primary font-label uppercase tracking-widest text-sm font-bold rounded-none hover:opacity-90 transition-all flex items-center justify-center gap-3">
                    Sepete Ekle
                    <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  </button>
                  <p className="text-center text-xs text-on-surface-variant font-body">
                    Tüm siparişlerde karbon-nötr kargo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styled With */}
        <section className="mt-48 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold tracking-tighter">
              Styled With
            </h2>
            <div className="h-1 w-12 bg-primary-container mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/styled-1.jpg",
                category: "Giyim",
                name: "The Raw Linen Trouser",
                price: "₺1.490",
                offset: "",
              },
              {
                img: "/images/styled-2.jpg",
                category: "Dış Giyim",
                name: "Summer Suede Bomber",
                price: "₺6.900",
                offset: "translate-y-12",
              },
              {
                img: "/images/styled-3.jpg",
                category: "Aksesuar",
                name: "The Artisan Belt",
                price: "₺890",
                offset: "",
              },
            ].map((item) => (
              <div key={item.name} className={`group cursor-pointer ${item.offset}`}>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-body font-bold">{item.name}</h3>
                  </div>
                  <p className="text-sm font-body text-primary">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
