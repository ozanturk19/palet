"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const en = locale === "en";
  return (
    <footer className="w-full mt-24 bg-surface-dim">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 w-full max-w-[1920px] mx-auto">
        <div className="space-y-6">
          <Link
            href="/"
            className="text-lg font-bold text-primary block"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "2px" }}
          >
            PALETKIDS
          </Link>
          <p className="text-sm text-[#5d4037] leading-relaxed max-w-xs font-body">
            {en ? "Timeless pieces for little ones." : "Çocuklar için premium deri ceket, yelek ve ayakkabı. Kalıcı kalite."}
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
            {en ? "Collections" : "Koleksiyonlar"}
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/koleksiyon?kategori=ceket", label: en ? "Leather Jacket" : "Deri Ceket" },
              { href: "/koleksiyon?kategori=yelek", label: en ? "Leather Vest" : "Deri Yelek" },
              { href: "/koleksiyon?kategori=ayakkabi", label: en ? "Shoes" : "Ayakkabı" },
              { href: "/bakim", label: en ? "Leather Care" : "Deri Bakım" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-label uppercase tracking-widest text-[#5d4037] hover:underline underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
            {en ? "Support" : "Destek"}
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/monograf", label: en ? "Atelier Journal" : "Atölye Monografı" },
              { href: "/surdurulebilirlik", label: en ? "Sustainability" : "Sürdürülebilirlik" },
              { href: "/kargo-iade", label: en ? "Shipping & Returns" : "Kargo & İade" },
              { href: "/gizlilik", label: en ? "Privacy" : "Gizlilik" },
              { href: "/iletisim", label: en ? "Contact" : "İletişim" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-label uppercase tracking-widest text-[#5d4037] hover:underline underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
            {en ? "Newsletter" : "Bülten"}
          </h4>
          <p className="text-[#5d4037] text-xs font-label uppercase tracking-widest">
            {en ? "Be the first to know about new collections." : "Yeni koleksiyonlardan önce haberdar ol."}
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder={en ? "Your email address" : "E-posta adresin"}
              className="w-full bg-transparent border-b border-[#8b4f2d]/30 py-2 focus:outline-none focus:border-primary transition-all font-body text-sm placeholder:text-[#5d4037]/50"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary">
              arrow_forward
            </button>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://instagram.com/paletkids"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-label uppercase tracking-widest text-[#5d4037] hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/905320000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-label uppercase tracking-widest text-[#5d4037] hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1920px] mx-auto">
        <p className="font-label text-xs uppercase tracking-widest text-[#5d4037] opacity-60">
          {en ? "© 2026 PALET KIDS. All rights reserved." : "© 2026 PALET KIDS. Tüm hakları saklıdır."}
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-primary opacity-60">
            language
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-primary opacity-60">
            {en ? "EN / ₺" : "TR / ₺"}
          </span>
        </div>
      </div>
    </footer>
  );
}
