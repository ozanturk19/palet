import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PALET | The Suede Gallery",
  description:
    "Premium erkek süet ayakkabı. Chelsea Boot, Loafer ve Derby — sınırlı koleksiyonlar, editorial tasarım.",
  openGraph: {
    title: "PALET | The Suede Gallery",
    description: "Premium erkek süet ayakkabı koleksiyonu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body antialiased selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
