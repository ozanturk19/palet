import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sepet — PALET KIDS",
  description: "Alışveriş sepetiniz.",
};

export default function SepetPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-primary/30 mb-8" style={{ fontSize: "6rem" }}>
          shopping_bag
        </span>

        <span className="section-label mb-4 block">Alışveriş Çantası</span>
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-background mb-6">
          Sepetiniz şu an boş.
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-md mb-12 leading-relaxed">
          Koleksiyonumuzu keşfedin ve beğendiğiniz ürünleri sepete ekleyin.
          Sipariş ve ön kayıt için WhatsApp&apos;tan bize ulaşabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/koleksiyon"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4"
          >
            Koleksiyonu Keşfet
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
          <a
            href="https://wa.me/905320000000?text=Merhaba%2C%20PALET%20KIDS%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary font-label uppercase tracking-widest text-sm hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-lg">chat_bubble</span>
            WhatsApp ile İletişim
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
          {[
            { icon: "local_shipping", label: "Ücretsiz Kargo", desc: "Tüm siparişlerde" },
            { icon: "cached", label: "30 Gün İade", desc: "Koşulsuz değişim" },
            { icon: "lock", label: "Güvenli Ödeme", desc: "SSL şifreli" },
          ].map((item) => (
            <div key={item.label} className="bg-surface-container-low p-6 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">{item.label}</span>
              <span className="text-xs text-on-surface-variant font-body">{item.desc}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
