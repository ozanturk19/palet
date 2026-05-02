import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Privacy Policy" : "Gizlilik Politikası",
    description: en
      ? "PALET KIDS personal data processing policy. How your data is collected, processed and protected under GDPR."
      : "PALET KIDS'in kişisel veri işleme politikası. KVKK ve GDPR kapsamında verileriniz nasıl toplanır, işlenir ve korunur.",
  };
}

export default async function GizlilikPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const sections = en
    ? [
        {
          title: "Data Controller",
          content:
            "The legal entity responsible for processing your personal data on behalf of the PALET KIDS brand is the company providing services through this site. You can find contact details on the /iletisim page.",
        },
        {
          title: "What Data We Collect",
          content:
            "During the order process we collect your name, email, phone, billing and delivery address. For newsletter sign-up we collect only your email address. During site visits, anonymous usage data and technical log records are created automatically.",
        },
        {
          title: "Purposes of Processing",
          content:
            "Your data is processed for: order fulfilment and shipping tracking; fulfilling legal obligations (e-invoicing, accounting); new collection and campaign notifications (with your consent); and site security and fraud prevention. It is never shared with third parties for commercial purposes.",
        },
        {
          title: "Retention Periods",
          content:
            "Order and accounting records are retained for 10 years as required by law. Newsletter subscription data is deleted immediately upon unsubscription. Technical logs are automatically deleted after 90 days.",
        },
        {
          title: "Your Rights (GDPR Art. 15–22)",
          content:
            "You have the right to know whether your data is being processed, to request a copy, to request correction of inaccurate data, to request deletion, to object to processing and to request compensation for damages. To exercise these rights, write to info@paletkids.com.",
        },
        {
          title: "Cookies",
          content:
            "Only strictly necessary cookies for basic functionality are used. For third-party analytics or advertising cookies, you can manage permissions through your browser settings. You can update your cookie preferences at any time.",
        },
        {
          title: "Security",
          content:
            "Your data is transmitted via TLS 1.3 encrypted connection. Payment information is never stored on our servers; it is processed through PCI-DSS compliant payment infrastructure.",
        },
        {
          title: "Updates",
          content:
            "This policy is updated when necessary. Significant changes are notified by email. The current version is always published on this page.",
        },
      ]
    : [
        {
          title: "Veri Sorumlusu",
          content:
            "PALET KIDS markası adına kişisel verilerinizin işlenmesinden sorumlu tüzel kişi, bu site aracılığıyla hizmet sunan şirkettir. İletişim bilgilerine /iletisim sayfasından ulaşabilirsiniz.",
        },
        {
          title: "Hangi Veriler Toplanır",
          content:
            "Sipariş sürecinde ad-soyad, e-posta, telefon, fatura ve teslimat adresi bilgilerinizi; bülten kaydında yalnızca e-posta adresinizi işliyoruz. Site ziyaretlerinde anonim kullanım verileri ve teknik log kayıtları otomatik olarak oluşturulur.",
        },
        {
          title: "İşleme Amaçları",
          content:
            "Verileriniz; sipariş teslimi ve kargo takibi, yasal yükümlülüklerin yerine getirilmesi (e-fatura, muhasebe), yeni koleksiyon ve kampanya bildirimleriniz için (açık rıza ile) ve site güvenliği ile dolandırıcılık önleme amacıyla işlenir. Üçüncü taraflarla asla ticari amaçla paylaşılmaz.",
        },
        {
          title: "Saklama Süreleri",
          content:
            "Sipariş ve muhasebe kayıtları yasal zorunluluk gereği 10 yıl saklanır. Bülten aboneliği verileriniz aboneliği iptal ettiğiniz anda silinir. Teknik loglar 90 gün sonra otomatik silinir.",
        },
        {
          title: "Haklarınız (KVKK Md. 11)",
          content:
            "Verilerinizin işlenip işlenmediğini öğrenme, işlenen verileri talep etme, hatalı verilerin düzeltilmesini isteme, silinmesini talep etme, işlemeye itiraz etme ve zararların tazminini talep etme haklarına sahipsiniz. Bu hakları kullanmak için info@paletkids.com adresine yazabilirsiniz.",
        },
        {
          title: "Çerezler (Cookies)",
          content:
            "Yalnızca temel işlevsellik için zorunlu çerezler kullanılmaktadır. Üçüncü taraf analitik veya reklam çerezleri için tarayıcı ayarlarınızdan izin yönetimi yapabilirsiniz. Çerez tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.",
        },
        {
          title: "Güvenlik",
          content:
            "Verileriniz TLS 1.3 şifreli bağlantı ile iletilir. Ödeme bilgileri hiçbir şekilde sunucularımızda saklanmaz; PCI-DSS uyumlu ödeme altyapısı üzerinden işlenir.",
        },
        {
          title: "Güncellemeler",
          content:
            "Bu politika gerektiğinde güncellenir. Önemli değişiklikler e-posta ile bildirilir. Politikanın güncel versiyonu her zaman bu sayfada yayınlanır.",
        },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              {en ? "Last updated: January 2026" : "Son güncelleme: Ocak 2026"}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              {en ? (
                <>Privacy<br /><span className="text-primary italic">Policy.</span></>
              ) : (
                <>Gizlilik<br /><span className="text-primary italic">Politikası.</span></>
              )}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              {en
                ? "Your data belongs to you. This page explains clearly how we process it — in plain language, not legal jargon."
                : "Verileriniz size aittir. Bu sayfa onları nasıl işlediğimizi açıkça anlatır — hukuki dille değil, insan diliyle."}
            </p>
          </div>
        </section>

        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="h-px bg-outline-variant" />
        </div>

        <section className="py-20 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl space-y-1">
            {sections.map((section, i) => (
              <div key={section.title} className="bg-surface-container-lowest p-10">
                <div className="flex items-start gap-6">
                  <span className="font-headline text-3xl font-extrabold text-outline-variant/25 flex-shrink-0 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-headline text-xl font-bold mb-4 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-on-surface-variant leading-relaxed font-body">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-surface-dim px-6 md:px-12">
          <div className="max-w-[1920px] mx-auto max-w-3xl">
            <div className="bg-surface-container-lowest p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  {en ? "Questions?" : "Sorularınız için"}
                </h3>
                <p className="text-on-surface-variant font-body text-sm">
                  {en
                    ? "info@paletkids.com · Response time: 3 business days"
                    : "info@paletkids.com · Yanıt süresi: 3 iş günü"}
                </p>
              </div>
              <a
                href="mailto:info@paletkids.com"
                className="bg-primary text-on-primary px-8 py-3 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all flex-shrink-0"
              >
                {en ? "Send Email" : "E-posta Gönder"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
