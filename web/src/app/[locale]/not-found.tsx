import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Page Not Found — PALET KIDS" : "Sayfa Bulunamadı — PALET KIDS",
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const en = locale === "en";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background">
      <span
        className="font-logo text-[10rem] font-bold text-primary/10 leading-none select-none"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        404
      </span>
      <span className="section-label mb-4 block -mt-8">
        {en ? "Page Not Found" : "Sayfa Bulunamadı"}
      </span>
      <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-background mb-6">
        {en
          ? "This page has moved or doesn't exist."
          : "Bu sayfa burada değil."}
      </h1>
      <p className="text-on-surface-variant font-body text-base max-w-sm mb-10 leading-relaxed">
        {en
          ? "The page you're looking for has moved or no longer exists. Keep exploring our collection."
          : "Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Koleksiyonumuzu keşfetmeye devam edin."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary inline-flex items-center gap-3 px-10 py-4">
          {en ? "Back to Home" : "Anasayfaya Dön"}
        </Link>
        <Link
          href="/koleksiyon"
          className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary font-label uppercase tracking-widest text-sm hover:bg-primary hover:text-on-primary transition-all"
        >
          {en ? "View Collection" : "Koleksiyonu Gör"}
        </Link>
      </div>
    </main>
  );
}
