"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      {/* PALET — Cinzel, taba/kahve */}
      <text
        x="0"
        y="27"
        fontFamily="'Cinzel', 'Georgia', serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="3"
        fill="#8b4f2d"
      >
        PALET
      </text>

      {/* Ayırıcı ince dikey çizgi */}
      <line x1="103" y1="4" x2="103" y2="30" stroke="#8b4f2d" strokeWidth="1" strokeOpacity="0.3" />

      {/* KIDS — her harf ayrı renk */}
      {/* K — terracotta */}
      <text x="112" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#C4714A">K</text>
      {/* I — amber */}
      <text x="131" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#C9953A">I</text>
      {/* D — sage */}
      <text x="143" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#6B9E7A">D</text>
      {/* S — soft blue */}
      <text x="163" y="27" fontFamily="'Cinzel', 'Georgia', serif" fontSize="26"
        fontWeight="700" letterSpacing="0" fill="#7B9EC9">S</text>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
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
                ${pathname === link.href ? "text-primary" : "text-on-surface-variant hover:text-primary"}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300
                ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Sağ ikonlar */}
        <div className="flex items-center gap-5">
          <button className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary transition-colors">
            person
          </button>
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
        ${open ? "max-h-80 py-6" : "max-h-0"}`}>
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
        </div>
      </div>
    </nav>
  );
}
