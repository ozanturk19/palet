import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — PALLET",
  description:
    "PALLET ile iletişime geçin. Sipariş sorularınız, iade talepleriniz veya beden danışmanlığı için buradayız.",
};

const channels = [
  {
    icon: "mail",
    title: "E-posta",
    value: "hello@pallet.com.tr",
    note: "Yanıt süresi: 1 iş günü",
    href: "mailto:hello@pallet.com.tr",
  },
  {
    icon: "chat_bubble",
    title: "WhatsApp",
    value: "+90 532 000 00 00",
    note: "Hf. içi 10:00 – 19:00",
    href: "https://wa.me/905320000000",
  },
  {
    icon: "schedule",
    title: "Çalışma Saatleri",
    value: "Pzt – Cmt",
    note: "10:00 – 19:00 (TSİ)",
    href: null,
  },
];

const faqs = [
  {
    q: "Sipariş verdim, ne zaman kargolanır?",
    a: "Siparişler iş günü 14:00'e kadar verilirse aynı gün, sonrasında verilirse ertesi iş günü kargoya teslim edilir.",
  },
  {
    q: "Beden değiştirmek istiyorum, nasıl yapabilirim?",
    a: "Ürün elinize ulaştıktan sonra 14 gün içinde /kargo-iade sayfasındaki formu doldurarak ücretsiz değişim başlatabilirsiniz.",
  },
  {
    q: "Ayakkabım kusurlu geldi, ne yapmalıyım?",
    a: "hello@pallet.com.tr adresine fotoğraflı geri bildirim gönderin. Kusurlu ürünleri iade sürecine sokmadan önce değerlendiriyoruz.",
  },
  {
    q: "Toptan sipariş veya işbirliği için kimle konuşmalıyım?",
    a: "B2B ve kurumsal talepler için b2b@pallet.com.tr adresine yazın.",
  },
];

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-6">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                İletişim — PALLET
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-8">
                Size <br />
                <span className="text-primary italic">Yardımcı</span> <br />
                Olalım.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body max-w-md">
                Sipariş, iade, beden danışmanlığı ya da merak ettiğiniz her
                şey için buradayız. Yanıt süresi 1 iş günü.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="md:col-span-5 md:col-start-8 space-y-1">
              {channels.map((ch) => (
                <div
                  key={ch.title}
                  className="bg-surface-container-low p-8 flex items-center gap-6"
                >
                  <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      {ch.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-1">
                      {ch.title}
                    </span>
                    {ch.href ? (
                      <a
                        href={ch.href}
                        className="font-headline text-lg font-bold text-primary hover:opacity-80 transition-opacity block"
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <span className="font-headline text-lg font-bold block">
                        {ch.value}
                      </span>
                    )}
                    <span className="text-xs text-on-surface-variant font-body">
                      {ch.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                  Mesaj Gönderin
                </h2>
                <p className="text-on-surface-variant font-body mb-10">
                  Sipariş numaranızı biliyorsanız konuya ekleyin, işlemi
                  hızlandırır.
                </p>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                        Adınız
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                      Konu
                    </label>
                    <select className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm text-on-surface appearance-none cursor-pointer">
                      <option value="">Konu seçin</option>
                      <option value="siparis">Sipariş / Kargo</option>
                      <option value="iade">İade / Değişim</option>
                      <option value="beden">Beden Danışmanlığı</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent border-b border-outline/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-sm resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all"
                  >
                    Gönder
                  </button>
                </form>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter mb-10">
                  Sık Sorulan
                </h2>
                <div className="space-y-1">
                  {faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="bg-surface-container-lowest p-8"
                    >
                      <h3 className="font-headline text-base font-bold mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
