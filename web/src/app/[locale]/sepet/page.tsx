import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Your Bag" : "Sepet",
    description: en ? "Your shopping bag." : "Alışveriş sepetiniz.",
  };
}

export default async function SepetPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const features = en
    ? [
        { icon: "local_shipping", label: "Free Shipping", desc: "On all orders" },
        { icon: "cached", label: "14-Day Returns", desc: "Unconditional exchange" },
        { icon: "lock", label: "Secure Payment", desc: "SSL encrypted" },
      ]
    : [
        { icon: "local_shipping", label: "Ücretsiz Kargo", desc: "Tüm siparişlerde" },
        { icon: "cached", label: "30 Gün İade", desc: "Koşulsuz değişim" },
        { icon: "lock", label: "Güvenli Ödeme", desc: "SSL şifreli" },
      ];

  const waMsg = en
    ? encodeURIComponent("Hello, I'd like to place an order with PALET KIDS.")
    : encodeURIComponent("Merhaba, PALET KIDS ürünleri hakkında bilgi almak istiyorum.");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen flex flex-col items-center justify-center text-center">
        <span
          className="material-symbols-outlined text-primary/30 mb-8"
          style={{ fontSize: "6rem" }}
        >
          shopping_bag
        </span>

        <span className="section-label mb-4 block">
          {en ? "Shopping Bag" : "Alışveriş Çantası"}
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-background mb-6">
          {en ? "Your bag is empty." : "Sepetiniz şu an boş."}
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-md mb-12 leading-relaxed">
          {en
            ? "Discover our collection and add the pieces you love. For orders and enquiries, reach us on WhatsApp."
            : "Koleksiyonumuzu keşfedin ve beğendiğiniz ürünleri sepete ekleyin. Sipariş ve ön kayıt için WhatsApp'tan bize ulaşabilirsiniz."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/koleksiyon"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4"
          >
            {en ? "Explore Collection" : "Koleksiyonu Keşfet"}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
          <a
            href={`https://wa.me/905320000000?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary font-label uppercase tracking-widest text-sm hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-lg">chat_bubble</span>
            {en ? "Contact via WhatsApp" : "WhatsApp ile İletişim"}
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
          {features.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-low p-6 flex flex-col items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                {item.icon}
              </span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">
                {item.label}
              </span>
              <span className="text-xs text-on-surface-variant font-body">{item.desc}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
