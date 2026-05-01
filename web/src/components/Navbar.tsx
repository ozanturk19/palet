"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/koleksiyon?kategori=ceket", label: "Deri Ceket" },
    { href: "/koleksiyon?kategori=yelek", label: "Deri Yelek" },
    { href: "/koleksiyon?kategori=ayakkabi", label: "Ayakkabı" },
    { href: "/bakim", label: "Bakım" },
    { href: "/monograf", label: "Hikayemiz" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-xl font-bold text-primary"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "3px" }}
          >
            PALETKIDS
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body transition-colors duration-300 text-sm ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-[#5d4037] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">
            person
          </button>
          <Link
            href="/sepet"
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all relative"
          >
            shopping_bag
          </Link>
          <button className="md:hidden material-symbols-outlined text-on-surface-variant">
            menu
          </button>
        </div>
      </div>
    </nav>
  );
}
