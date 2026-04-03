import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Monograph — PALLET",
  description:
    "PALLET'in kuruluş hikayesi, Tuscan atölyeleri ve süet obsesyonu. Hızlı modanın karşısında kalıcı karakter.",
  openGraph: {
    title: "The Monograph — PALLET",
    description: "Süedin dokunsal dürüstlüğü üzerine bir manifesto.",
  },
};

const chapters = [
  {
    number: "01",
    title: "Başlangıç Noktası",
    body: [
      "PALLET tek bir sorudan doğdu: Neden pazar, erkek için kaliteli ayakkabıyı ya lüks markaların ulaşılmaz fiyatlarıyla ya da hızlı modanın birkaç ay ömürlü ürünleriyle sınırlı tutuyor?",
      "Cevap basitti — kimse bu arayı doldurmaya çalışmamıştı. Biz o arayı doldurmak için yola çıktık.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAW-4nnSmbasOV7KLEqjRre5ZUoYmJ3buNJOcwuqb2Bj1Cha8Zi-44WcATmyhnqzgI_RtxqY9xgZOBgut8lz2M_Ak4-2nDTC_0yFNBuG6BpAXAWtepUvrxntcDF-KVWlYdcuVkv0YzU-THUQhGlvXYDS7hm9xot24SB5zwhbVYNPmyr67ysEJ_c44gQ5h405tfyo1xb-FTMGQ_EKJqLDKE4gR-T8nN6Z6cPsEW-3ZSh0ruVUH9_FG7dnbgkHbHvLOFlJFEpG3e84WM",
    imageAlt: "Atölye — başlangıç",
    imagePosition: "right" as const,
  },
  {
    number: "02",
    title: "Tuscan Seçimi",
    body: [
      "İtalya'nın Toskana bölgesi, yüzyıllar boyunca dünyanın en iyi deri işçiliğine ev sahipliği yaptı. Bizim atölyemiz de bu geleneğin içinde, Floransa'nın güneyinde küçük bir aile işletmesi.",
      "Her derinin 'nap' kalitesini — yani yüzeyin kadifemsi dokusunu ve yoğunluğunu — gözle ve elle kontrol eden ustalar var burada. Bir rule of thumb var atölyede: 'Tereddüt varsa, geçilir.' Sadece en iyi çeyrek malzeme üretime girer.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7bxTji9p5cAYZwSvZNHsWonW49YPk5vBJyL_iyQ7_xtGniG3CfD9aQ84_A-QF-G6comwSdQFN1zUsvZJsQrW4EP1xqlZwJThS7Rbj5UgmafhbSzBFioNlIBsl6rnZBwIGnENXt860FouqVI21EfyWLqbfY44kGuxfCeP-ziAOFYl_qih__-tIvzosNXZrEK4f1F2FBokwIz4s24sm-CZVcbAWiY_nBtUbeS4x4SJeXruQn7sIaYbKama4nzjR11zRnZk_CBkQtPV8",
    imageAlt: "Tuscan atölyesi",
    imagePosition: "left" as const,
  },
  {
    number: "03",
    title: "Yavaş Süreç",
    body: [
      "Bir PALLET çifti, kalıba geçmeden önce ortalama 14 saat işçilik gerektirir. Bu süre, büyük markaların bantlı üretimiyle kıyaslandığında neredeyse iki kat fazla.",
      "Neden? Çünkü süet, hata affetmez. Yanlış bir kesim, fazla bir baskı — deri bunu sonsuza kadar saklar. Yavaş çalışmak bir tercih değil, materyalin zorunluluğu.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUtz35Igroo3MRO8QM4EFdcqYv9paTceEHwnGeTZ_Kwmxv5cHPU84hnycgXHQ6noizkqDNuTL3b-cQ2kM_2TzvYMx8mkcw0k4c_yeZ8VhCd6VPgMVoKLeBxJyrlQp0AMfa5N0Aim-xoHL6N-GPXEL9DtK-vnDsVKPbt6mixJpvVSRoRobWacB6gBi6yCm0oSZVtJwdZtFGMTskHWzDiedT41Dt4bVsna_hLIeZ_VxyezXvDtwbvec7u9veMZoQ2ntAhCohpFvAHju",
    imageAlt: "El işçiliği",
    imagePosition: "right" as const,
  },
];

const values = [
  {
    icon: "grain",
    title: "Malzeme Önce",
    desc: "Tasarım malzemeye göre şekillenir, tersi değil. Süetin doğal karakterini bastırmayan, onu ön plana çıkaran kesimler.",
  },
  {
    icon: "autorenew",
    title: "Mevsimlik Düzenleme",
    desc: "Yılda dört koleksiyon değil, iki sezon. Her sezonda sınırlı sayıda çift. Stok bitmeden yenisi gelmiyor.",
  },
  {
    icon: "eco",
    title: "Sorumlu Üretim",
    desc: "Vegetable-tanned deri, su bazlı boyalar, karbon dengeleme programı. Çevresel etki minimum, kalite maksimum.",
  },
];

export default function MonografPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              The Monograph — PALLET
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              Süedin <br />
              <span className="text-primary italic">Manifestosu.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              Bu sayfa bir ürün kataloğu değil. Bir obsesyonun kaydı —
              neden bu malzeme, bu atölye, bu yavaşlık.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="h-px bg-outline-variant" />
        </div>

        {/* Chapters */}
        {chapters.map((chapter, i) => (
          <section key={chapter.number} className={`py-32 ${i % 2 === 1 ? "bg-surface-container-low" : "bg-surface"}`}>
            <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-16 items-center ${
                  chapter.imagePosition === "left" ? "" : "md:[direction:rtl]"
                }`}
              >
                <div
                  className={`md:col-span-6 ${
                    chapter.imagePosition === "left" ? "" : "md:[direction:ltr]"
                  }`}
                >
                  <div className="aspect-[4/3] bg-surface-container overflow-hidden relative">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`md:col-span-5 ${
                    chapter.imagePosition === "left"
                      ? "md:col-start-8"
                      : "md:col-start-1 md:[direction:ltr]"
                  }`}
                >
                  <span className="font-headline text-7xl font-extrabold text-outline-variant/30 block mb-4">
                    {chapter.number}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tighter mb-8 text-on-background">
                    {chapter.title}
                  </h2>
                  <div className="space-y-5 text-lg text-on-surface-variant leading-relaxed font-body">
                    {chapter.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Values */}
        <section className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                Ne Değil, Neden
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl mx-auto">
                PALLET'i anlatan üç ilke.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-container-lowest p-12"
                >
                  <span className="material-symbols-outlined text-primary text-4xl mb-8 block">
                    {v.icon}
                  </span>
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-40 bg-primary">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center">
            <blockquote className="font-headline text-4xl md:text-6xl font-extrabold text-on-primary tracking-tighter leading-tight max-w-4xl mx-auto italic">
              &ldquo;Ayakkabı ikinci bir deri gibi hissettirmeli. Sabahtan akşama
              unutmalısın onu.&rdquo;
            </blockquote>
            <cite className="mt-10 block font-label text-xs uppercase tracking-widest text-on-primary/60 not-italic">
              — PALLET Kurucu Notu, 2026
            </cite>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-3">
                Koleksiyona Git
              </h2>
              <p className="text-on-surface-variant font-body">
                Manifesto okundu. Şimdi hisset.
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Link
                href="/koleksiyon"
                className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
              >
                Koleksiyonu Gör
              </Link>
              <Link
                href="/bakim"
                className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                Bakım Rehberi
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
