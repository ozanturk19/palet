import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-surface-dim">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 w-full max-w-[1920px] mx-auto">
        <div className="space-y-6">
          <Link
            href="/"
            className="text-xl font-bold text-primary font-headline tracking-tighter block"
          >
            PALLET
          </Link>
          <p className="text-sm text-[#5d4037] leading-relaxed max-w-xs font-body">
            Premium erkek süet ayakkabı galerisi. Sınırlı koleksiyonlar,
            kalıcı craftsmanship.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
            Koleksiyonlar
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/koleksiyon?kategori=chelsea-boot", label: "Suede Boots" },
              { href: "/koleksiyon?kategori=loafer", label: "Loafers" },
              { href: "/koleksiyon?kategori=derby", label: "Derbies" },
              { href: "/bakim", label: "Care Kit" },
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
            Destek
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
              { href: "/kargo-iade", label: "Kargo & İade" },
              { href: "/gizlilik", label: "Gizlilik" },
              { href: "/iletisim", label: "İletişim" },
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
            Bülten
          </h4>
          <p className="text-[#5d4037] text-xs font-label uppercase tracking-widest">
            Yeni koleksiyonlardan önce haberdar ol.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="E-posta adresin"
              className="w-full bg-transparent border-b border-[#8b4f2d]/30 py-2 focus:outline-none focus:border-primary transition-all font-body text-sm placeholder:text-[#5d4037]/50"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary">
              arrow_forward
            </button>
          </div>
          <div className="flex gap-4 pt-2">
            {["Instagram", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-label uppercase tracking-widest text-[#5d4037] hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1920px] mx-auto">
        <p className="font-label text-xs uppercase tracking-widest text-[#5d4037] opacity-60">
          © 2026 PALLET. The Suede Gallery. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-primary opacity-60">
            language
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-primary opacity-60">
            TR / TL
          </span>
        </div>
      </div>
    </footer>
  );
}
