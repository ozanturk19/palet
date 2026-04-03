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
        <section className="relative min-h-[900px] flex items-center px-6 md:px-12 py-20 overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-5 z-10">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                The Suede Gallery — 2026
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-8">
                Curated <br />
                <span className="text-primary italic">Comfort.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed font-body">
                Premium erkek süet ayakkabı. Her çift, Tuscan deri atölyelerinden
                seçilmiş malzeme ve el işçiliğiyle üretilir.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/koleksiyon"
                  className="bg-primary text-on-primary px-10 py-4 rounded-none hover:opacity-90 transition-all font-label uppercase tracking-widest text-sm"
                >
                  Koleksiyonu Gör
                </Link>
                <Link
                  href="/monograf"
                  className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                >
                  Craftsmanship
                </Link>
              </div>
            </div>

            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAW-4nnSmbasOV7KLEqjRre5ZUoYmJ3buNJOcwuqb2Bj1Cha8Zi-44WcATmyhnqzgI_RtxqY9xgZOBgut8lz2M_Ak4-2nDTC_0yFNBuG6BpAXAWtepUvrxntcDF-KVWlYdcuVkv0YzU-THUQhGlvXYDS7hm9xot24SB5zwhbVYNPmyr67ysEJ_c44gQ5h405tfyo1xb-FTMGQ_EKJqLDKE4gR-T8nN6Z6cPsEW-3ZSh0ruVUH9_FG7dnbgkHbHvLOFlJFEpG3e84WM"
                  alt="PALET premium erkek süet ayakkabı"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-10 -left-10 md:-left-20 bg-surface-container-lowest p-10 max-w-xs hidden md:block shadow-sm">
                <span className="font-headline text-2xl font-bold text-primary block mb-2">
                  Heritage 01
                </span>
                <p className="text-sm text-on-surface-variant font-body">
                  El-gerilmiş Tuscan süet. Signature mikropor bitiş.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Edit */}
        <section className="py-32 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter">
                  Seasonal Edit
                </h2>
                <p className="text-on-surface-variant mt-2 font-body">
                  Toprak tonları ve hava dirençli süet işçiliği.
                </p>
              </div>
              <Link
                href="/koleksiyon"
                className="text-primary font-label uppercase tracking-widest text-sm border-b border-primary/20 hover:border-primary transition-all"
              >
                Tümünü Gör
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Feature large */}
              <Link href="/urun/mercer-loafer" className="md:col-span-2 row-span-2 group cursor-pointer">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-square md:aspect-auto md:h-[480px]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm70400yrFvZnRcTwOsHw6zKvWRIc12riTBoxtHQgTAbdZ3dgMSLNJuB2t0K7GRCh2Q26KUETNJYOhxRJRixjmwSs8Mu-KzfENVgPjg0OxP8ZUKzQUQsZCBw7N2rCHTSddlVBjaUxnAgBTr35d6PNPO9fu_SpAsOvsK1d4Ib3MrB6QgqXpO_Z3zhJvO6hXL4nWjoEd6aY-D4kkbELgNdfZ7Uw-POrcwp9FT_9N2fR6yxylzDJ0zwO2CO5e-h54M0mETiaw9wqVPP6c"
                    alt="Mercer Loafer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-xl font-bold">The Mercer Loafer</h3>
                    <p className="text-on-surface-variant">Toasted Pecan Suede</p>
                  </div>
                  <span className="font-body text-primary font-bold">₺2.890</span>
                </div>
              </Link>

              {/* Small items */}
              <Link href="/urun/chelsea-ii" className="group cursor-pointer">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-square">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUtz35Igroo3MRO8QM4EFdcqYv9paTceEHwnGeTZ_Kwmxv5cHPU84hnycgXHQ6noizkqDNuTL3b-cQ2kM_2TzvYMx8mkcw0k4c_yeZ8VhCd6VPgMVoKLeBxJyrlQp0AMfa5N0Aim-xoHL6N-GPXEL9DtK-vnDsVKPbt6mixJpvVSRoRobWacB6gBi6yCm0oSZVtJwdZtFGMTskHWzDiedT41Dt4bVsna_hLIeZ_VxyezXvDtwbvec7u9veMZoQ2ntAhCohpFvAHju"
                    alt="Chelsea II"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-headline text-lg font-bold">Chelsea II</h3>
                <p className="text-on-surface-variant">Apricot Dusk</p>
              </Link>

              <Link href="/urun/city-derby" className="group cursor-pointer">
                <div className="bg-surface relative overflow-hidden mb-6 aspect-square">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZa7DkM2TJDQCQrXyEDT00c2Kj5u3ex3Xz_uzw0P2PLC2ksBWGqDTXH3xBfcDfTdf3g4IQlSD3cmKGYNBZAVA78zcx2QtGyA3Rwl11Ala13kjlfs3xLXcg-5MPtKRZxq2ZmrmVBTcPBIUYJYVx1OisZEbTYtOU9Nqqe5UCZSH4pVCwtPc6GECR6J3IcX2QRnBXvsbmBMcJRRMgyF0NwctYiuUz6Vatqwj2ml0NTkR3H"
                    alt="City Derby"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-headline text-lg font-bold">The City Derby</h3>
                <p className="text-on-surface-variant">Ebony Suede</p>
              </Link>

              <div className="md:col-span-2 group cursor-pointer h-80">
                <div className="bg-tertiary-container w-full h-full p-12 flex flex-col justify-end">
                  <span className="text-on-tertiary-container font-label uppercase tracking-[0.2em] mb-4 text-xs">
                    Sınırlı Üretim
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-on-tertiary-container max-w-xs">
                    The Suede Weekend Bag
                  </h3>
                  <div className="mt-6">
                    <span className="material-symbols-outlined text-on-tertiary-container group-hover:translate-x-4 transition-transform inline-block">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monograph section */}
        <section className="py-40 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-6 relative">
                <div className="w-4/5 aspect-[3/4] bg-surface-container overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7bxTji9p5cAYZwSvZNHsWonW49YPk5vBJyL_iyQ7_xtGniG3CfD9aQ84_A-QF-G6comwSdQFN1zUsvZJsQrW4EP1xqlZwJThS7Rbj5UgmafhbSzBFioNlIBsl6rnZBwIGnENXt860FouqVI21EfyWLqbfY44kGuxfCeP-ziAOFYl_qih__-tIvzosNXZrEK4f1F2FBokwIz4s24sm-CZVcbAWiY_nBtUbeS4x4SJeXruQn7sIaYbKama4nzjR11zRnZk_CBkQtPV8"
                    alt="Atölye"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8">
                  Our Monograph
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-body">
                  <p>
                    PALET, tek bir obsesyon üzerine kuruldu: süedin dokunsal dürüstlüğü.
                    Ayakkabının ikinci bir deri gibi hissettirmesi gerektiğine inanıyoruz.
                  </p>
                  <p>
                    Her çift, Tuscan atölyemizde derinin &quot;nap&quot; kalitesi ve
                    dayanıklılığı için seçilmesiyle başlar. Hızlı modanın aksine,
                    kalıcı karakter için yavaş bir süreç.
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

        {/* Care cards */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-headline text-4xl font-bold mb-4 tracking-tighter">
                Süet Bakımı
              </h2>
              <p className="text-on-surface-variant font-body">
                Süet yaşayan bir malzemedir. Doğru ritüelle zamanla daha da güzelleşir.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "brush",
                  title: "Haftalık Fırçalama",
                  desc: "Tozu kaldırmak ve süedin orijinal dokusunu korumak için krep fırça kullanın.",
                },
                {
                  icon: "water_drop",
                  title: "Koruma Spreyi",
                  desc: "Nanotech sprey, dokuyu değiştirmeden görünmez nem bariyeri oluşturur.",
                },
                {
                  icon: "timer",
                  title: "Dinlenme Ritüeli",
                  desc: "Her giyim arasında 24 saat dinlendirin. Deri nefes alır, uzun ömürlü olur.",
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
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-primary tracking-tighter mb-8 italic">
              Galeriye Adım At.
            </h2>
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
