import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — PALLET",
  description:
    "PALLET'in kişisel veri işleme politikası. KVKK ve GDPR kapsamında verileriniz nasıl toplanır, işlenir ve korunur.",
};

const sections = [
  {
    title: "Veri Sorumlusu",
    content:
      "PALLET markası adına kişisel verilerinizin işlenmesinden sorumlu tüzel kişi, bu site aracılığıyla hizmet sunan şirkettir. İletişim bilgilerine /iletisim sayfasından ulaşabilirsiniz.",
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
      "Verilerinizin işlenip işlenmediğini öğrenme, işlenen verileri talep etme, hatalı verilerin düzeltilmesini isteme, silinmesini talep etme, işlemeye itiraz etme ve zararların tazminini talep etme haklarına sahipsiniz. Bu hakları kullanmak için gizlilik@pallet.com.tr adresine yazabilirsiniz.",
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

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
              Son güncelleme: Ocak 2026
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
              Gizlilik <br />
              <span className="text-primary italic">Politikası.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              Verileriniz size aittir. Bu sayfa onları nasıl işlediğimizi
              açıkça anlatır — hukuki dille değil, insan diliyle.
            </p>
          </div>
        </section>

        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="h-px bg-outline-variant" />
        </div>

        <section className="py-20 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="max-w-3xl space-y-1">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="bg-surface-container-lowest p-10"
              >
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
                  Sorularınız için
                </h3>
                <p className="text-on-surface-variant font-body text-sm">
                  gizlilik@pallet.com.tr · Yanıt süresi: 3 iş günü
                </p>
              </div>
              <a
                href="mailto:gizlilik@pallet.com.tr"
                className="bg-primary text-on-primary px-8 py-3 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all flex-shrink-0"
              >
                E-posta Gönder
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
