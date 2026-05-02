import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Our Story — PALET KIDS" : "Hikayemiz — PALETKIDS",
    description: en
      ? "From pallet to product — the PALET KIDS brand story. Premium leather for children aged 3–14."
      : "PALETKIDS'in kuruluş hikayesi — çocuklar için premium deri ve kalıcı kalite.",
    openGraph: {
      title: en ? "Our Story — PALET KIDS" : "Hikayemiz — PALETKIDS",
      description: en
        ? "Premium leather for children. Timeless pieces for little ones."
        : "Çocuklar için çocuk dostu premium deri üzerine bir manifesto.",
    },
  };
}

export default async function MonografPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const chapters = en
    ? [
        {
          number: "01",
          title: "Where It Began",
          body: [
            "PALET KIDS was born from a single question: why does the children's apparel market keep quality materials away from children? Plastic-coated faux leather is everywhere — real craftsmanship is nowhere to be found.",
            "The answer was simple: no one had focused on producing premium, durable leather specifically for children. We set out to fill that gap. From pallet to product — every piece carries that founding obsession.",
          ],
          image: "/images/atelier.jpg",
          imageAlt: "PALET KIDS atelier — the beginning",
          imagePosition: "right" as const,
        },
        {
          number: "02",
          title: "Premium Leather Selection",
          body: [
            "Every piece is produced in carefully chosen ateliers and passes rigorous quality control. Premium child-safe leather — durable, elegant, authentic. Crafted from the source, made to last beyond childhood.",
            "We apply a special softening process designed for children — mindful of skin sensitivity, prioritising freedom of movement. Not stiffness, but natural flex.",
          ],
          image: "/images/hero-kids.jpg",
          imageAlt: "Leather selection process",
          imagePosition: "left" as const,
        },
        {
          number: "03",
          title: "The Longevity Philosophy",
          body: [
            "Not fast fashion — slow production. Every PALET KIDS piece is designed to last more than one season, even to pass from sibling to sibling. Timeless pieces for little ones.",
            "With proper care, premium leather grows more beautiful over the years. From raw material to lasting memories — this is the best investment a family can make.",
          ],
          image: "/images/featured-jacket.jpg",
          imageAlt: "Handcraft detail",
          imagePosition: "right" as const,
        },
      ]
    : [
        {
          number: "01",
          title: "Başlangıç Noktası",
          body: [
            "PALETKIDS tek bir sorudan doğdu: Neden çocuk giyim piyasası kaliteli malzemeyi çocuklardan uzak tutuyor? Plastik kaplı sahte deri her yerde, kaliteli işçilik ise yok.",
            "Cevap basitti — kimse çocuklar için kaliteli, dayanıklı deri üzerine odaklanmamıştı. Biz o boşluğu doldurmak için yola çıktık.",
          ],
          image: "/images/atelier.jpg",
          imageAlt: "PALETKIDS atölyesi — başlangıç",
          imagePosition: "right" as const,
        },
        {
          number: "02",
          title: "Premium Deri Seçimi",
          body: [
            "Her parça, özenli atölyelerde üretilir ve titiz kalite kontrolden geçer. Çocuk dostu premium deri — dayanıklı, şık, özgün.",
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
            "Doğru bakımla premium deri yıllar içinde daha güzel bir görünüm kazanır. Bu yatırım, en iyi yatırımdır.",
          ],
          image: "/images/featured-jacket.jpg",
          imageAlt: "El işçiliği detayı",
          imagePosition: "right" as const,
        },
      ];

  const values = en
    ? [
        {
          icon: "child_care",
          title: "Child-Centered",
          desc: "Every design is conceived around children's active lives. Freedom of movement, safe hardware, skin-friendly material.",
        },
        {
          icon: "autorenew",
          title: "Long-Life Production",
          desc: "Two seasons a year, limited runs. No restocks until the next batch — because every piece is crafted with care.",
        },
        {
          icon: "eco",
          title: "Responsible Production",
          desc: "Vegetable-tanned leather, water-based dyes. Respect for the world our children will grow up in — in the product and in the process.",
        },
      ]
    : [
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

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              {en ? "Our Story — PALET KIDS" : "Hikayemiz — PALETKIDS"}
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              {en ? (
                <>Real Leather,<br /><span className="text-primary italic">Real Children.</span></>
              ) : (
                <>Gerçek Deri,<br /><span className="text-primary italic">Gerçek Çocuklar.</span></>
              )}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              {en
                ? "This page is not a product catalogue. It is a record of our obsession with why children deserve premium leather."
                : "Bu sayfa bir ürün kataloğu değil. Neden çocuklar için kaliteli premium deri kullanıyoruz — obsesyonun kaydı."}
            </p>
            {en && (
              <p className="mt-6 text-sm font-label uppercase tracking-widest text-primary italic">
                Timeless pieces for little ones.
              </p>
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="h-px bg-outline-variant" />
        </div>

        {/* Chapters */}
        {chapters.map((chapter, i) => (
          <section
            key={chapter.number}
            className={`py-32 ${i % 2 === 1 ? "bg-surface-container-low" : "bg-surface"}`}
          >
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
                    <Image src={chapter.image} alt={chapter.imageAlt} fill className="object-cover" />
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
                {en ? "Not What — Why" : "Ne Değil, Neden"}
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl mx-auto">
                {en ? "Three principles that define PALET KIDS." : "PALETKIDS'i anlatan üç ilke."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {values.map((v) => (
                <div key={v.title} className="bg-surface-container-lowest p-12">
                  <span className="material-symbols-outlined text-primary text-4xl mb-8 block">
                    {v.icon}
                  </span>
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-40 bg-primary">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center">
            <blockquote className="font-headline text-4xl md:text-6xl font-extrabold text-on-primary tracking-tighter leading-tight max-w-4xl mx-auto italic">
              {en ? (
                <>&ldquo;Children are not small adults &mdash; they deserve their own quality.&rdquo;</>
              ) : (
                <>&ldquo;Çocuklar büyüklerin küçük versiyonu değil &mdash; kendi kalitelerini hak ediyorlar.&rdquo;</>
              )}
            </blockquote>
            <cite className="mt-10 block font-label text-xs uppercase tracking-widest text-on-primary/60 not-italic">
              {en ? "— PALET KIDS Founder Note, 2026" : "— PALETKIDS Kurucu Notu, 2026"}
            </cite>
            {en && (
              <p className="mt-8 text-on-primary/70 font-body text-sm italic">
                Crafted from the source, made to last beyond childhood.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-3">
                {en ? "Explore the Collection" : "Koleksiyona Git"}
              </h2>
              <p className="text-on-surface-variant font-body">
                {en ? "Story read. Now feel it." : "Hikaye okundu. Şimdi hisset."}
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Link
                href="/koleksiyon"
                className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
              >
                {en ? "View Collection" : "Koleksiyonu Gör"}
              </Link>
              <Link
                href="/bakim"
                className="border-b border-primary text-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                {en ? "Care Guide" : "Bakım Rehberi"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
