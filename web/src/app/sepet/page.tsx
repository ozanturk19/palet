import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SepetPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen">
        <header className="mb-16">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold mb-4 block">
            Alışveriş Çantası
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background">
            Seçkini incele.
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Ürünler */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row gap-8 pb-12 items-start border-b border-outline-variant/10">
                <div className="w-full md:w-56 aspect-[4/5] bg-surface-container overflow-hidden rounded-sm flex-shrink-0 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuuna7oEpmgbGwZvLzMwCNwjwMBT3j2ydEfft1horwF84Uup-mvMHr4N5GvTu25g5jVxYN5tDhubxyxigsGrDydJZoGj-aPuik6pQyPPHLPTDcfTgS3mOr2OCHgA-wxWQy19rF8YkAUqUhdt2QbzvkFl8RhDd1Lu2Jy7jHS2GSZV7XVvnM_n5DyXdPWkbIOjmOepG5jPLWfSfUuL8o-z053YTTmhxVnnp6GXiGUgWJ0--eJJ0cX-_chYr5QfA2Az5zFrQFLgjVcQEz"
                    alt="Suede Loafers in Sand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline text-2xl font-bold tracking-tight">
                        Suede Loafers in Sand
                      </h3>
                      <p className="font-headline text-xl font-medium">₺2.690,00</p>
                    </div>
                    <p className="text-on-surface-variant font-body text-sm mb-6">
                      İtalyan Dana Süet · Deri Taban · Numara 42
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-6 bg-surface-container-low px-4 py-2 rounded">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">remove</span>
                      </button>
                      <span className="font-headline font-bold text-lg">01</span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">add</span>
                      </button>
                    </div>
                    <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">delete</span>{" "}
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row gap-8 pb-12 items-start">
                <div className="w-full md:w-56 aspect-[4/5] bg-surface-container overflow-hidden rounded-sm flex-shrink-0 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTUZkQY_QN0bCqBuLHneF5L64BHN86pK7mnEo15XVyHQoRioNBIMQ7MYcGt5Jmj7vlz7KRGJ7GQWLduYCu4ppqn6udgxAfckLzxGTTISQ0u2cMLLZ7ax9HuOEK8p4KLloc93vW6cR_texyyhkbYzmVmiA8jVl5HrnkF19_myU6oCJibcxqE3OIrtNPGeLXf7lWBmR-K-nT5nsOAwCB-U6uyBDAQ5SCv5jfzUvfKUFO40aKbZJzCKkeADH3cSG0kw7AvGuWsKRTKf_h"
                    alt="Elysian Chelsea"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline text-2xl font-bold tracking-tight">
                        Elysian Chelsea Boot
                      </h3>
                      <p className="font-headline text-xl font-medium">₺3.290,00</p>
                    </div>
                    <p className="text-on-surface-variant font-body text-sm mb-6">
                      Deep Tobacco Süet · Limited · Numara 41
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-6 bg-surface-container-low px-4 py-2 rounded">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">remove</span>
                      </button>
                      <span className="font-headline font-bold text-lg">01</span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">add</span>
                      </button>
                    </div>
                    <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">delete</span>{" "}
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Teslimat */}
            <div className="bg-surface-container-low p-10 space-y-8">
              <h2 className="font-headline text-2xl font-bold tracking-tight">
                Teslimat Adresi
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Sokak Adresi
                  </label>
                  <input
                    type="text"
                    placeholder="Bağdat Caddesi No:124"
                    className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all font-body text-lg py-2 placeholder:text-on-surface-variant/30 outline-none"
                  />
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Şehir
                  </label>
                  <input
                    type="text"
                    placeholder="İstanbul"
                    className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all font-body text-lg py-2 placeholder:text-on-surface-variant/30 outline-none"
                  />
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Posta Kodu
                  </label>
                  <input
                    type="text"
                    placeholder="34710"
                    className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all font-body text-lg py-2 placeholder:text-on-surface-variant/30 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sipariş özeti */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-surface-container p-10">
                <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">
                  Sipariş Özeti
                </h2>
                <div className="space-y-4 border-b border-outline-variant/20 pb-8 mb-8">
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body">Ara Toplam</span>
                    <span className="font-headline font-bold">₺5.980,00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body">Kargo</span>
                    <span className="font-headline font-bold">₺0,00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body">KDV (%20)</span>
                    <span className="font-headline font-bold">Dahil</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-10">
                  <span className="font-headline text-xl font-bold">Toplam</span>
                  <div className="text-right">
                    <span className="font-headline text-4xl font-extrabold tracking-tighter text-primary">
                      ₺5.980,00
                    </span>
                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">
                      KDV Dahil
                    </p>
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary py-6 font-label uppercase tracking-widest font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                  Siparişi Tamamla
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="mt-8 flex items-center gap-4 text-on-surface-variant/60 justify-center">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">
                    Şifreli & Güvenli Ödeme
                  </span>
                </div>
              </div>

              <div className="bg-primary-container/10 p-8 flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                <div>
                  <h4 className="font-headline font-bold text-primary">
                    Karbon Nötr Kargo
                  </h4>
                  <p className="text-sm text-on-surface-variant mt-2 font-body leading-relaxed">
                    Her PALLET siparişi, Kuzey Avrupa&apos;daki ağaçlandırma projeleriyle
                    dengelenir.
                  </p>
                </div>
              </div>

              <Link
                href="/koleksiyon"
                className="block text-center font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-4"
              >
                ← Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
