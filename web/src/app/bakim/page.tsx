import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deri Bakım Rehberi — PALETKIDS",
  description:
    "Çocuk deri ceket, yelek ve ayakkabılarınızı yıllarca giymek için bakım rehberi. Kolay adımlarla uzun ömür.",
  openGraph: {
    title: "Deri Bakım Rehberi — PALETKIDS",
    description: "Gerçek deri yaşayan bir malzemedir. Doğru bakımla yıllarca sürer.",
  },
};

const dailySteps = [
  {
    icon: "brush",
    title: "Yumuşak Bez ile Silme",
    when: "Her giyimden sonra",
    detail:
      "Nemli olmayan yumuşak bir bezle yüzeyi nazikçe silin. Toz ve hafif kirleri uzaklaştırır. Çocukların giyim alışkanlıkları için bu adım özellikle önemlidir.",
    tip: "Islak bir bezle silmeyin — deriyi çok ıslatmak şekil bozukluğuna yol açabilir.",
  },
  {
    icon: "water_drop",
    title: "Deri Kremi",
    when: "Ayda bir",
    detail:
      "Renksiz, çocuk güvenli deri kremi uygulayın. Derinin nem dengesini korur, çatlama ve kuruma önlenir. İnce bir tabaka yeterledir — fazlası ise leke bırakabilir.",
    tip: "İlk uygulamadan önce görünmez bir bölgede test edin.",
  },
  {
    icon: "timer",
    title: "Hava Alma",
    when: "Her giyimden sonra",
    detail:
      "Deriyi plastik poşette değil, açık havada ya da bez torbada saklayın. Deri nefes almalıdır — kapalı ortamda nem birikir, küf oluşabilir.",
    tip: "Çocukların dolabında askıda asın, katlamayın.",
  },
  {
    icon: "storefront",
    title: "Mevsimlik Saklama",
    when: "Sezon dışı",
    detail:
      "Serin, kuru ve doğrudan güneş almayan bir yerde saklayın. Bez toz torbası kullanın. Ceket ve yelekleri doldurarak dolap içinde şekillerini koruyun.",
    tip: "Silika jel paketi ile nemlenmeden koruyun.",
  },
];

const deepCleanSteps = [
  {
    step: "01",
    title: "Hazırlık",
    desc: "Ceket veya yelekteki olası tozları yumuşak fırçayla alın. Ayakkabılar için bağcıkları çıkarıp içine kağıt tıkayın.",
  },
  {
    step: "02",
    title: "Hafif Temizlik",
    desc: "Az miktarda deri temizleyici veya sabun suyuyla (çok az!) ıslatılmış bezle nazikçe silin. Sadece kirli bölgelere uygulayın.",
  },
  {
    step: "03",
    title: "Leke Tedavisi",
    desc: "İnatçı lekeler için deri silgisi veya az alkollü bez kullanın. Dairesel değil, tek yönde silin. Aşırı ovalamaktan kaçının.",
  },
  {
    step: "04",
    title: "Doğal Kurutma",
    desc: "Asla saç kurutma makinesi veya radyatör kullanmayın. Oda sıcaklığında, gölgede kurutun. Şekli korumak için içini doldurun.",
  },
  {
    step: "05",
    title: "Nem Dengesi",
    desc: "Tamamen kuruduktan sonra deri kremi uygulayın. Bu adım temizlik sonrası kaybolan doğal nemi geri kazandırır.",
  },
  {
    step: "06",
    title: "Son Kontrol",
    desc: "Fermuarları, tokaları ve dikiş yerlerini kontrol edin. Küçük sorunlar büyümeden önce müdahale edilirse deri ömrü uzar.",
  },
];

const myths = [
  {
    myth: "Çocuk derisi çabuk bozulur.",
    fact:
      "Gerçek tam tahıl deri sentetikten çok daha dayanıklıdır. Çocukların aktif kullanımına karşılık verir ve düzgün bakımla yıllarca sürer.",
  },
  {
    myth: "Deri kıyafet çocuğa ağır gelir.",
    fact:
      "Modern işlenmiş tam tahıl deri son derece hafiftir. PALETKIDS ürünleri özellikle hafiflik ve hareket özgürlüğü için tasarlanmıştır.",
  },
  {
    myth: "Deri yıkandıkça bozulur.",
    fact:
      "Doğru bakım ile deri yıkanmaz — silinir. Bu basit fark, derinin yıllarca güzel kalmasını sağlar.",
  },
];

export default function BakimPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                Bakım Rehberi — PALETKIDS
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
                Deri İçin <br />
                <span className="text-primary italic">Bakım.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
                Gerçek deri yaşayan bir malzemedir. Doğru bakımla çocuğunuzun
                derisini kardeşine devredebilirsiniz.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 bg-surface-container-low p-10">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">
                İçindekiler
              </span>
              <nav className="space-y-3">
                {["Günlük Bakım", "Derin Temizlik", "Mitler & Gerçekler"].map((item, i) => (
                  <a
                    key={item}
                    href={`#section-${i}`}
                    className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-body group"
                  >
                    <span className="font-headline text-xs text-outline-variant group-hover:text-primary-container transition-colors">
                      0{i + 1}
                    </span>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Daily care */}
        <section id="section-0" className="py-32 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                Günlük Bakım
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                Toplam süre: 2 dakika. Uzun ömrün sırrı burada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {dailySteps.map((step) => (
                <div
                  key={step.title}
                  className="bg-surface-container-lowest p-10 group hover:bg-surface transition-colors"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 bg-primary-container/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/40 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-1">
                        {step.title}
                      </h3>
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        {step.when}
                      </span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed font-body mb-5">
                    {step.detail}
                  </p>
                  <div className="border-l-2 border-primary pl-4">
                    <span className="font-label text-xs uppercase tracking-widest text-primary mr-2">
                      İpucu:
                    </span>
                    <span className="text-sm text-on-surface-variant font-body">
                      {step.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep clean */}
        <section id="section-1" className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                Derin Temizlik
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                Ayda bir uygulayın. Sonuç — deri yeniden canlılanır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {deepCleanSteps.map((item) => (
                <div key={item.step} className="bg-surface-container-low p-8">
                  <span className="font-headline text-5xl font-extrabold text-outline-variant/25 block mb-6">
                    {item.step}
                  </span>
                  <h3 className="font-headline text-lg font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Myths */}
        <section id="section-2" className="py-32 bg-surface-dim">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
                Mitler & Gerçekler
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                Çocuk deri ürünleri hakkında yaygın yanlış bilgiler.
              </p>
            </div>
            <div className="space-y-1">
              {myths.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-error mt-1 flex-shrink-0">
                      close
                    </span>
                    <p className="text-on-surface-variant line-through font-body">
                      {item.myth}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                      check
                    </span>
                    <p className="text-on-surface font-body">{item.fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="font-headline text-5xl font-extrabold text-on-primary tracking-tighter mb-4 italic">
                Deri bakım kiti hediye.
              </h2>
              <p className="text-on-primary/70 font-body text-lg">
                Her PALETKIDS siparişinde deri bakım bezi ve koruyucu krem hediye.
              </p>
            </div>
            <div className="flex gap-6 flex-wrap md:justify-end">
              <Link
                href="/koleksiyon"
                className="bg-on-primary text-primary px-10 py-4 font-label uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Koleksiyona Git
              </Link>
              <Link
                href="/monograf"
                className="border-b border-on-primary/40 text-on-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                Marka Hikayesi
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
