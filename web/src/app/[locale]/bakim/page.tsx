import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Leather Care Guide" : "Deri Bakım Rehberi",
    description: en
      ? "How to care for your children's leather jacket, vest and shoes for years of wear. Easy steps for long life."
      : "Çocuk deri ceket, yelek ve ayakkabılarınızı yıllarca giymek için bakım rehberi. Kolay adımlarla uzun ömür.",
    openGraph: {
      title: en ? "Leather Care Guide" : "Deri Bakım Rehberi",
      description: en
        ? "Premium leather is a living material. With proper care it lasts years."
        : "Premium deri yaşayan bir malzemedir. Doğru bakımla yıllarca sürer.",
    },
  };
}

export default async function BakimPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const dailySteps = en
    ? [
        {
          icon: "brush",
          title: "Wipe with a Soft Cloth",
          when: "After every wear",
          detail:
            "Gently wipe the surface with a dry, soft cloth. Removes dust and light marks. This step is especially important given how children wear their clothes.",
          tip: "Never wipe with a wet cloth — over-moistening leather can cause it to lose its shape.",
        },
        {
          icon: "water_drop",
          title: "Leather Conditioner",
          when: "Once a month",
          detail:
            "Apply a colourless, child-safe leather conditioner. It maintains the moisture balance, preventing cracking and dryness. A thin layer is enough — too much can leave marks.",
          tip: "Test on an inconspicuous area before first application.",
        },
        {
          icon: "timer",
          title: "Let It Breathe",
          when: "After every wear",
          detail:
            "Store leather in open air or a cloth bag — never in a plastic bag. Leather must breathe; in a sealed space moisture builds up and mould can form.",
          tip: "Hang in the wardrobe — do not fold.",
        },
        {
          icon: "storefront",
          title: "Off-Season Storage",
          when: "Out of season",
          detail:
            "Store in a cool, dry place away from direct sunlight. Use a cloth dust bag. Stuff jackets and vests to help them keep their shape.",
          tip: "Add a silica gel packet to protect against moisture.",
        },
      ]
    : [
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

  const deepCleanSteps = en
    ? [
        {
          step: "01",
          title: "Preparation",
          desc: "Brush off any loose dust with a soft brush. For shoes, remove laces and stuff with paper.",
        },
        {
          step: "02",
          title: "Light Clean",
          desc: "Gently wipe with a cloth barely dampened with a small amount of leather cleaner or soapy water. Apply only to dirty areas.",
        },
        {
          step: "03",
          title: "Stain Treatment",
          desc: "For stubborn stains use a leather eraser or a cloth with a small amount of alcohol. Wipe in one direction, not circles. Avoid excessive rubbing.",
        },
        {
          step: "04",
          title: "Natural Drying",
          desc: "Never use a hair dryer or radiator. Dry at room temperature in the shade. Stuff to maintain shape.",
        },
        {
          step: "05",
          title: "Moisture Balance",
          desc: "Once fully dry, apply leather conditioner. This step restores the natural moisture lost during cleaning.",
        },
        {
          step: "06",
          title: "Final Check",
          desc: "Check zippers, buckles and stitching. Addressing small issues early extends the leather's life.",
        },
      ]
    : [
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

  const myths = en
    ? [
        {
          myth: "Children's leather wears out quickly.",
          fact: "Our premium child-safe leather is far more durable than synthetic alternatives. It withstands children's active use and, with proper care, lasts for years.",
        },
        {
          myth: "Leather clothing is too heavy for children.",
          fact: "Our specially processed premium leather is extremely lightweight. PALET KIDS products are designed specifically for lightness and freedom of movement.",
        },
        {
          myth: "Leather deteriorates when washed.",
          fact: "With proper care, leather is never washed — it is wiped. This simple distinction keeps leather beautiful for years.",
        },
      ]
    : [
        {
          myth: "Çocuk derisi çabuk bozulur.",
          fact: "Çocuk dostu premium derimiz sentetikten çok daha dayanıklıdır. Çocukların aktif kullanımına karşılık verir ve düzgün bakımla yıllarca sürer.",
        },
        {
          myth: "Deri kıyafet çocuğa ağır gelir.",
          fact: "Özel işlenmiş premium derimiz son derece hafiftir. PALETKIDS ürünleri özellikle hafiflik ve hareket özgürlüğü için tasarlanmıştır.",
        },
        {
          myth: "Deri yıkandıkça bozulur.",
          fact: "Doğru bakım ile deri yıkanmaz — silinir. Bu basit fark, derinin yıllarca güzel kalmasını sağlar.",
        },
      ];

  const tocItems = en
    ? ["Daily Care", "Deep Clean", "Myths & Facts"]
    : ["Günlük Bakım", "Derin Temizlik", "Mitler & Gerçekler"];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-6 block">
                {en ? "Care Guide — PALET KIDS" : "Bakım Rehberi — PALETKIDS"}
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
                {en ? (
                  <>Leather <br /><span className="text-primary italic">Care.</span></>
                ) : (
                  <>Deri İçin <br /><span className="text-primary italic">Bakım.</span></>
                )}
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
                {en
                  ? "Premium leather is a living material. With the right care you can hand your child's leather down to a sibling."
                  : "Premium deri yaşayan bir malzemedir. Doğru bakımla çocuğunuzun derisini kardeşine devredebilirsiniz."}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 bg-surface-container-low p-10">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">
                {en ? "Contents" : "İçindekiler"}
              </span>
              <nav className="space-y-3">
                {tocItems.map((item, i) => (
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
                {en ? "Daily Care" : "Günlük Bakım"}
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                {en ? "Total time: 2 minutes. The secret to long life." : "Toplam süre: 2 dakika. Uzun ömrün sırrı burada."}
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
                      <h3 className="font-headline text-xl font-bold mb-1">{step.title}</h3>
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
                      {en ? "Tip:" : "İpucu:"}
                    </span>
                    <span className="text-sm text-on-surface-variant font-body">{step.tip}</span>
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
                {en ? "Deep Clean" : "Derin Temizlik"}
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                {en ? "Apply monthly. Result — leather revived." : "Ayda bir uygulayın. Sonuç — deri yeniden canlılanır."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {deepCleanSteps.map((item) => (
                <div key={item.step} className="bg-surface-container-low p-8">
                  <span className="font-headline text-5xl font-extrabold text-outline-variant/25 block mb-6">
                    {item.step}
                  </span>
                  <h3 className="font-headline text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">{item.desc}</p>
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
                {en ? "Myths & Facts" : "Mitler & Gerçekler"}
              </h2>
              <p className="text-on-surface-variant font-body max-w-xl">
                {en
                  ? "Common misconceptions about children's leather products."
                  : "Çocuk deri ürünleri hakkında yaygın yanlış bilgiler."}
              </p>
            </div>
            <div className="space-y-1">
              {myths.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-error mt-1 flex-shrink-0">close</span>
                    <p className="text-on-surface-variant line-through font-body">{item.myth}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check</span>
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
                {en ? "Free leather care kit." : "Deri bakım kiti hediye."}
              </h2>
              <p className="text-on-primary/70 font-body text-lg">
                {en
                  ? "Every PALET KIDS order comes with a leather care cloth and protective conditioner."
                  : "Her PALETKIDS siparişinde deri bakım bezi ve koruyucu krem hediye."}
              </p>
            </div>
            <div className="flex gap-6 flex-wrap md:justify-end">
              <Link
                href="/koleksiyon"
                className="bg-on-primary text-primary px-10 py-4 font-label uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                {en ? "Go to Collection" : "Koleksiyona Git"}
              </Link>
              <Link
                href="/monograf"
                className="border-b border-on-primary/40 text-on-primary px-2 py-4 font-label uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                {en ? "Brand Story" : "Marka Hikayesi"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
