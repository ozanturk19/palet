import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paletkids.com"),
  title: {
    default: "PALET KIDS | Premium Kids Leather",
    template: "%s | PALET KIDS",
  },
  description:
    "3–14 yaş çocuklar için el yapımı premium deri ceket, yelek ve ayakkabı. Çocuk dostu, dayanıklı, şık — PALET KIDS.",
  keywords: ["çocuk deri ceket", "çocuk deri yelek", "çocuk deri ayakkabı", "premium çocuk giyim", "palet kids", "kids leather jacket", "children leather"],
  openGraph: {
    title: "PALET KIDS | Premium Kids Leather",
    description: "Handcrafted premium leather for children aged 3–14.",
    type: "website",
    locale: "tr_TR",
    url: "https://paletkids.com",
    siteName: "PALET KIDS",
  },
  twitter: {
    card: "summary_large_image",
    title: "PALET KIDS | Premium Kids Leather",
    description: "Handcrafted premium leather for children aged 3–14.",
  },
  robots: { index: true, follow: true },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Nunito:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background text-on-background font-body antialiased">
        <NextIntlClientProvider messages={{}}>
          {children}
        </NextIntlClientProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8YB82G9S5T"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8YB82G9S5T');
        `}</Script>
      </body>
    </html>
  );
}
