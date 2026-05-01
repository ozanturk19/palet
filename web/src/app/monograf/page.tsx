import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hikayemiz — PALETKIDS",
  description:
    "PALETKIDS'in kuruluş hikayesi — çocuklar için gerçek deri, kalıcı kalite ve neden sentetik değil.",
  openGraph: {
    title: "Hikayemiz — PALETKIDS",
    description: "Çocuklar için gerçek deri obsesyonu üzerine bir manifesto.",
  },
};

const chapters = [
  {
    number: "01",
    title: "Başlangıç Noktası",
    body: [
      "PALETKIDS tek bir sorudan doğdu: Neden çocuk giyim piyasası gerçek deriyi çocuklardan uzak tutuyor? Plastik kaplı sahte deri her yerde, gerçek kalite ise yok.",
      "Cevap basitti — kimse çocuklar için gerçek deri üzerine odaklanmamıştı. Biz o boşluğu doldurmak için yola çıktık.",
    ],
    image: "/images/atelier.jpg",
    imageAlt: "PALETKIDS atölyesi — başlangıç",
    imagePosition: "right" as const,
  },
  {
    number: "02",
    title: "İtalyan Deri Seçimi",
    body: [
      "İtalya'nın Toskana bölgesi, yüzyıllar boyunca dünyanın en iyi deri işçiliğine ev sahipliği yaptı. Her parça, tam tahıl deride kalite kontrolden geçiyor.",
      "Çocuklar için özel yumuşatma işlemi uyguluyoruz — cilt hassasiyetine dikkat, hareket özgürlüğü ön planda. Sertlik değil, doğal esneklik.",
    ],
    image: "/images/hero-kids.jpg",
    imageAlt: "Deri seçim süreci",
    imagePosition: "left" as const,
  },
  {
    number: "03",
    title: "Uzun Ömür Felsefesi",
    body: [
      "Hızlı moda değil, yavaş üretim. Her PALETKIDS parçası, birden fazla sezon — hatta kardeşten kardeşe geçecek şekilde tasarlanıyor.",
      "Doğru bakımla gerçek deri yıllar içinde daha güzel bir görünüm kazanır. Bu yatırım, en iyi yatırımdır.",
    ],
    image: "/images/featured-jacket.jpg",
    imageAlt: "El işçiliği detayı",
    imagePosition: "right" as const,
  },
];

const values = [
  {
    icon: "child_care",
    title: "Çocuk Odaklı",
    desc: "Her tasarım çocukların aktif hayatı düşünülerek yapılır. Hareket özgürlüğü, güvenli aksesuarlar, cilt dostu malzeme.",
  },
  {
    icon: "autorenew",
    title: "Uzun Ömürlü Üretim",
    desc: "Yılda iki sezon, sınırlı üretim. Stok bitmeden yenisi gelmiyor — çünkü her parça özenle üretilir.",
  },
  {
    icon: "eco",
    title: "Sorumlu Üretim",
    desc: "Vegetable-tanned deri, su bazlı boyalar. Çocuklarımızın büyüyeceği dünyaya saygı — hem ürünlerde hem üretimde.",
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
              Hikayemiz — PALETKIDS
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              Gerçek Deri, <br />
              <span className="text-primary italic">Gerçek Çocuklar.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              Bu sayfa bir ürün kataloğu değil. Neden çocuklar için gerçek deri
              kullanıyoruz — obsesyonun kaydı.
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
                PALETKIDS&apos;i anlatan üç ilke.
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
              &ldquo;Çocuklar büyüklerin küçük versiyonu değil — kendi kalitelerini hak ediyorlar.&rdquo;
            </blockquote>
            <cite className="mt-10 block font-label text-xs uppercase tracking-widest text-on-primary/60 not-italic">
              — PALETKIDS Kurucu Notu, 2026
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
                Hikaye okundu. Şimdi hisset.
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
