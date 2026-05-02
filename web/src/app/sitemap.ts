import { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = "https://paletkids.com";

function tr(path: string) {
  return { url: `${base}${path}`, lastModified: new Date(), alternates: { languages: { en: `${base}/en${path}`, tr: `${base}${path}` } } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.flatMap((p) => [
    { url: `${base}/urun/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8, alternates: { languages: { en: `${base}/en/urun/${p.slug}`, tr: `${base}/urun/${p.slug}` } } },
  ]);

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0, alternates: { languages: { en: `${base}/en`, tr: base } } },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/koleksiyon`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9, alternates: { languages: { en: `${base}/en/koleksiyon`, tr: `${base}/koleksiyon` } } },
    { url: `${base}/en/koleksiyon`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...productUrls,
    { url: `${base}/monograf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6, alternates: { languages: { en: `${base}/en/monograf`, tr: `${base}/monograf` } } },
    { url: `${base}/en/monograf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/bakim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/kargo-iade`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/gizlilik`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/surdurulebilirlik`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
