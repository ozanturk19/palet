import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "elysian-chelsea",
    name: "Elysian Chelsea",
    material: "Deep Tobacco Suede",
    price: "₺3.290",
    badge: "Limited",
    colors: ["#3d2b1f", "#8b4f2d"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTUZkQY_QN0bCqBuLHneF5L64BHN86pK7mnEo15XVyHQoRioNBIMQ7MYcGt5Jmj7vlz7KRGJ7GQWLduYCu4ppqn6udgxAfckLzxGTTISQ0u2cMLLZ7ax9HuOEK8p4KLloc93vW6cR_texyyhkbYzmVmiA8jVl5HrnkF19_myU6oCJibcxqE3OIrtNPGeLXf7lWBmR-K-nT5nsOAwCB-U6uyBDAQ5SCv5jfzUvfKUFO40aKbZJzCKkeADH3cSG0kw7AvGuWsKRTKf_h",
    offset: false,
  },
  {
    slug: "arc-loafer",
    name: "Arc Loafer",
    material: "Sand Drift Suede",
    price: "₺2.690",
    badge: null,
    colors: ["#dbdad7", "#c5a881", "#e69b73"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCweEqWRczKkmndYLKyj5rNG9NMQBnbDAOP0menQ1T3W3jWBQZeUBl77LfbiqfBixIQHxxiN5EnAja9MQAeIbRKfnfHjOGob8osBj288edC_tmcAnKvICRTxJmYHoZwHYs0gANBedEv-OZZDHFCCpA1xqqIBE9TUqZeQA1VCofk5TMl2Ad8-lj4liYIo5mCAiIgCBMAP4GsiZ1VKDnifBr_YnKgP7Usu1LJ7l3ohS26UfhkhDN575GxYppTyxiHF9xSyOBhBIZUOKD8",
    offset: true,
  },
  {
    slug: "mesa-derby",
    name: "Mesa Derby",
    material: "Burnt Ochre Suede",
    price: "₺2.890",
    badge: null,
    colors: ["#e69b73"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyN-tODtwQFfptMNBDDDOuzc9NkitPW09ibZpYOS-j8oLFvcRIpFP5RK42LppjbI3_v8Pj6ahOzrZ37OE7H6eyPZkTT4WIebfeXQPeoWaR4Sn1ioveekwkPNTzTBIjkncYxsPH3y85QE2SMGjaDqbnlO8zBCb-qwhTLhn5fL5WTE21zVM_3ZPTC1hoo_VF8_b1TlxV0GNeetkTFR4_gdwA_CZ15e7gEvKh1ZOf8_PNd7XsrhpEO76cok_FhK8cyOUtsUI5KiRCYrEU",
    offset: false,
  },
  {
    slug: "nocturne-boot",
    name: "Nocturne Boot",
    material: "Bitter Cocoa Suede",
    price: "₺3.490",
    badge: null,
    colors: ["#3d2b1f"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjEDaGbqtf6mgxSvUP14KRTpOLxn9pnoZ_zevO3SE0R693J-ZcYtHbm718iO-JZr2bLLLLOK964yOZ9qFE3aiHJBjIoLiDTg-BKC6_Ni7boqw2Su2AhJaq14_Rc2tXtKpe8e65BNWp6QLdY5ehRxYuYktILR5KuBkdmsXK9gdG-r0U24F9Y5N-VcyHqfJ616W8mgtT_Ru7Zb5aGqhuq-NHTQkL2UsXI1-RKoNAANeUcZSP_HuFPeUqy-RXzyhKoYDcMsLSbxmI8fea",
    offset: true,
  },
];

export default function KoleksiyonPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen">
        <header className="px-6 md:px-12 mb-16 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="font-label text-sm uppercase tracking-widest text-primary mb-4 block">
                Heritage 2026
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-background leading-none">
                The Collection
              </h1>
            </div>
            <p className="font-body text-on-surface-variant max-w-xs italic text-right">
              Premium süedin dokunsal keşfi. Modern erkeğin hayat galerisine hazırlanmış.
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
                  {[
                    { label: "Tüm Ürünler", count: "12", active: true },
                    { label: "Chelsea Boots", count: "4", active: false },
                    { label: "Penny Loafers", count: "4", active: false },
                    { label: "Oxford Derbies", count: "4", active: false },
                  ].map((cat) => (
                    <li
                      key={cat.label}
                      className={`flex justify-between items-center cursor-pointer transition-colors ${
                        cat.active
                          ? "text-primary font-bold"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-[10px]">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  Renk Paleti
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {["#3d2b1f", "#8b4f2d", "#c5a881", "#e69b73", "#dbdad7"].map(
                    (color, i) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full ring-2 ring-offset-2 transition-all ${
                          i === 1
                            ? "ring-primary"
                            : "ring-transparent hover:ring-outline-variant"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
                  Numara (EU)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[40, 41, 42, 43, 44, 45].map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 flex items-center justify-center text-xs font-medium transition-colors ${
                        size === 42
                          ? "border border-primary text-primary"
                          : "border border-transparent bg-surface-container-high hover:bg-surface-container-highest"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <section className="flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
              {products.map((product) => (
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
                      className="object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label text-[10px] uppercase tracking-widest px-3 py-1">
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
                      <p className="text-on-surface-variant text-sm mt-1">
                        {product.material}
                      </p>
                    </div>
                    <span className="text-lg font-headline font-light text-on-surface">
                      {product.price}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-32 flex justify-center">
              <button className="group flex flex-col items-center gap-4">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  Keşfetmeye devam et
                </span>
                <div className="w-px h-16 bg-outline-variant overflow-hidden">
                  <div className="w-full h-full bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </div>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
