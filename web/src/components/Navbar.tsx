"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";

function PaletKidsLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 36"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PALET KIDS"
      role="img"
      style={{ overflow: "visible" }}
    >
      <text x="0" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="3" fill="#8b4f2d">PALET</text>
      <line x1="103" y1="4" x2="103" y2="30" stroke="#8b4f2d" strokeWidth="1" strokeOpacity="0.3" />
      <text x="112" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#C4714A">K</text>
      <text x="131" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#C9953A">I</text>
      <text x="143" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#6B9E7A">D</text>
      <text x="163" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#7B9EC9">S</text>
    </svg>
  );
}

export default function Navbar() {
  const locale = useLocale();
  const en = locale === "en";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = en
    ? [
        { href: "/koleksiyon?kategori=ceket",    label: "Leather Jacket" },
        { href: "/koleksiyon?kategori=yelek",     label: "Leather Vest" },
        { href: "/koleksiyon?kategori=ayakkabi",  label: "Shoes" },
        { href: "/bakim",                         label: "Care Guide" },
        { href: "/monograf",                      label: "Our Story" },
      ]
    : [
        { href: "/koleksiyon?kategori=ceket",    label: "Deri Ceket" },
        { href: "/koleksiyon?kategori=yelek",    label: "Deri Yelek" },
        { href: "/koleksiyon?kategori=ayakkabi", label: "Ayakkabı" },
        { href: "/bakim",                        label: "Bakım" },
        { href: "/monograf",                     label: "Hikayemiz" },
      ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1920px] mx-auto">

        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <PaletKidsLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-label text-[0.72rem] tracking-[0.16em] uppercase transition-colors duration-200 group
                ${pathname.startsWith(link.href.split("?")[0]) ? "text-primary" : "text-on-surface-variant hover:text-primary"}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300
                ${pathname.startsWith(link.href.split("?")[0]) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Right icons + language switcher */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-outline-variant/30 rounded-sm overflow-hidden">
            <Link
              href={pathname}
              locale="tr"
              className={`px-2 py-1 font-label text-[0.6rem] tracking-widest uppercase transition-colors ${
                !en ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              TR
            </Link>
            <Link
              href={pathname}
              locale="en"
              className={`px-2 py-1 font-label text-[0.6rem] tracking-widest uppercase transition-colors ${
                en ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              EN
            </Link>
          </div>

          <Link href="/sepet" className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary transition-colors">
            shopping_bag
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden material-symbols-outlined text-[22px] text-on-surface-variant"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-background border-t border-outline-variant/30
        ${open ? "max-h-96 py-6" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/20 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-3 pt-2">
            <Link href={pathname} locale="tr"
              className={`font-label text-[0.7rem] tracking-widest uppercase py-2 ${!en ? "text-primary font-bold" : "text-on-surface-variant"}`}>
              Türkçe
            </Link>
            <span className="text-outline-variant/40 py-2">|</span>
            <Link href={pathname} locale="en"
              className={`font-label text-[0.7rem] tracking-widest uppercase py-2 ${en ? "text-primary font-bold" : "text-on-surface-variant"}`}>
              English
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
