import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function translateProductName(name: string): string {
  return name
    .replace("Heritage Deri Ceket", "Heritage Leather Jacket")
    .replace("Moto Deri Ceket", "Moto Leather Jacket")
    .replace("Classic Deri Yelek", "Classic Leather Vest")
    .replace("Biker Deri Yelek", "Biker Leather Vest")
    .replace("Street Kid Sneaker", "Street Kid Sneaker")
    .replace("Palet Sneaker", "Palet Sneaker");
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  const locale = await getLocale();
  const enMeta = locale === "en";
  const productTitle = enMeta ? translateProductName(product.name) : product.name;
  return {
    title: productTitle,
    description:
      productTitle +
      (enMeta ? " — Premium child-safe leather. " : " — Çocuk dostu premium deri. ") +
      product.price +
      (enMeta ? ". From the PALET KIDS collection." : ". PALET KIDS koleksiyonundan."),
    openGraph: {
      title: productTitle,
      description: productTitle + " — " + product.material,
      images: [{ url: product.img }],
    },
  };
}

const sizes = {
  ceket: ["3-4", "5-6", "7-8", "9-10", "11-12", "13-14"],
  yelek: ["3-4", "5-6", "7-8", "9-10", "11-12", "13-14"],
  ayakkabi: ["EU 28", "EU 29", "EU 30", "EU 31", "EU 32", "EU 33", "EU 34", "EU 35", "EU 36", "EU 37"],
};

export default async function UrunDetayPage({
  params,
}: {
  params: { slug: string };
}) {
  const locale = await getLocale();
  const en = locale === "en";

  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const p = product!;

  const related = products.filter((item) => item.slug !== p.slug).slice(0, 3);
  const [main, sec1, sec2] = p.gallery;

  const categoryLabel = en
    ? p.kategori === "ceket"
      ? "Leather Jacket"
      : p.kategori === "yelek"
      ? "Leather Vest"
      : "Shoes"
    : p.kategori === "ceket"
    ? "Deri Ceket"
    : p.kategori === "yelek"
    ? "Deri Yelek"
    : "Ayakkabı";

  const materialLabel = en
    ? p.material === "Çocuk dostu premium deri"
      ? "Premium child-safe leather"
      : p.material.replace("Deri detaylı sneaker", "Leather-detail sneaker")
    : p.material;

  const productSizes =
    p.kategori === "ayakkabi" ? sizes.ayakkabi : sizes.ceket;

  const waMsg = en
    ? encodeURIComponent(
        `Hello, I'd like to order ${p.name} from PALET KIDS.`
      )
    : encodeURIComponent(
        `Merhaba, PALET KIDS'ten ${p.name} ürününü sipariş etmek istiyorum.`
      );

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Images */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 overflow-hidden aspect-[4/5] bg-surface-container relative">
              <Image
                src={main}
                alt={p.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-4 relative">
              <Image
                src={sec1}
                alt={`${p.name} detail`}
                fill
                className="object-cover object-top"
                sizes="30vw"
              />
            </div>
            <div className="overflow-hidden aspect-square bg-surface-container-low mt-12 relative">
              <Image
                src={sec2}
                alt={`${p.name} style`}
                fill
                className="object-cover object-top"
                sizes="30vw"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="section-label">
                  {categoryLabel} — 2026
                </span>
                <h1
                  className="font-headline font-bold tracking-tight text-on-background"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
                >
                  {p.name}
                </h1>
                <p className="text-2xl font-headline text-primary font-semibold">
                  {p.price},00
                </p>
              </div>

              <div className="space-y-4 py-8 border-y border-outline-variant/20">
                <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                  {en
                    ? "Handcrafted in our boutique atelier. Premium child-safe leather, soft inner lining, safe zippers and a special fit designed for children's freedom of movement. Ages 3–14."
                    : `Özel atölyede üretilmiş ${p.name.toLowerCase()}. Çocuk dostu premium deri, yumuşak iç astar, güvenli fermuar ve çocukların özgür hareket edebileceği özel kalıp. 3–14 yaş.`}
                </p>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  <span className="text-sm font-label uppercase tracking-wider text-on-surface">
                    {materialLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-10">
                {/* Color */}
                <div className="space-y-4">
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    {en ? "Colour Options" : "Renk Seçenekleri"}
                  </span>
                  <div className="flex gap-3">
                    {p.colors.map((color, i) => (
                      <button
                        key={color}
                        title={color}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          i === 0
                            ? "border-primary ring-2 ring-offset-2 ring-primary/30"
                            : "border-transparent hover:border-outline-variant"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                      {p.kategori === "ayakkabi"
                        ? en ? "Size (EU)" : "Numara (EU)"
                        : en ? "Size (Age)" : "Beden (Yaş)"}
                    </span>
                    <button className="text-xs text-primary font-label uppercase tracking-widest hover:opacity-80 transition-opacity">
                      {en ? "Size Guide" : "Beden Rehberi"}
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {productSizes.map((size, i) => (
                      <button
                        key={size}
                        className={`py-3 text-xs font-label uppercase tracking-widest border transition-all ${
                          i === 1
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/905320000000?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-primary text-on-primary px-10 py-5 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chat_bubble</span>
                    {en ? "Order via WhatsApp" : "WhatsApp ile Sipariş"}
                  </a>
                  <a
                    href="mailto:info@paletkids.com"
                    className="w-full flex items-center justify-center gap-3 border border-outline/40 text-on-surface-variant px-10 py-4 font-label uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    {en ? "Send Enquiry" : "E-posta Gönder"}
                  </a>
                </div>

                {/* Features */}
                <div className="bg-surface-container-low p-6 space-y-3">
                  {[
                    {
                      icon: "local_shipping",
                      text: en ? "Free shipping on all orders" : "Tüm siparişlerde ücretsiz kargo",
                    },
                    {
                      icon: "cached",
                      text: en ? "14-day free returns" : "14 gün ücretsiz iade",
                    },
                    {
                      icon: "verified",
                      text: en ? "Premium child-safe leather" : "Çocuk dostu premium deri",
                    },
                    {
                      icon: "child_care",
                      text: en ? "Ages 3–14, special ergonomic fit" : "3–14 yaş, özel ergonomik kalıp",
                    },
                  ].map((f) => (
                    <div key={f.icon} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-base flex-shrink-0">
                        {f.icon}
                      </span>
                      <span className="text-xs font-body text-on-surface-variant">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-32 pt-16 border-t border-outline-variant/20">
          <h2 className="font-headline text-3xl font-bold tracking-tighter mb-12">
            {en ? "You May Also Like" : "Benzer Ürünler"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
            {related.map((item) => (
              <Link key={item.slug} href={`/urun/${item.slug}`} className="group block">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-container">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-headline text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-primary font-headline font-semibold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
