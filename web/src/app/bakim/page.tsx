import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Süet Bakım Rehberi — PALLET",
  description:
    "Süet ayakkabınızı yıllarca giymek için haftalık bakım rutini, koruma spreyinden dinlenme ritüeline eksiksiz rehber.",
  openGraph: {
    title: "Süet Bakım Rehberi — PALLET",
    description: "Süet yaşayan bir malzemedir. Doğru ritüelle zamanla daha da güzelleşir.",
  },
};

const dailySteps = [
  {
    icon: "brush",
    title: "Fırçalama",
    when: "Her giyimden sonra",
    detail:
      "Krep fırçayı tek yönde kullanın — süedin 'nap' yönüyle. Dairesel hareket lif demetlerini karıştırır, donuk görünüme yol açar. Hafif, kısa vuruşlar yeterli.",
    tip: "Fırçayı ıslak ayakkabıya sürtmeyin; önce tamamen kurutun.",
  },
  {
    icon: "water_drop",
    title: "Koruma Spreyi",
    when: "Haftada bir",
    detail:
      "Nanotech bazlı su itici sprey, lifler arasına nüfuz ederek görünmez bir bariyer oluşturur. 25–30 cm mesafeden, eşit hareketlerle uygulayın. 10 dakika bekleyin, ardından tekrar fırçalayın.",
    tip: "İlk kullanımda iki kat atın. Sonraki haftalarda bir kat yeterli.",
  },
  {
    icon: "timer",
    title: "Dinlenme",
    when: "Ardışık gün giymeden önce",
    detail:
      "Deri, her giyimden sonra 24-48 saat dinlenmeli. Bu süre içinde deri içindeki nem dağılır, form kalıba geri döner. İki çift arasında dönüşümlü kullanım ömrü iki katına çıkarır.",
    tip: "Dinlenme sırasında ahşap ayakkabı kalıbı kullanmak şekli korur.",
  },
  {
    icon: "storefront",
    title: "Saklama",
    when: "Sezon dışı",
    detail:
      "Plastik çanta yerine soluk alabilen toz torbaları kullanın. Direkt güneş ışığından ve ısı kaynaklarından uzak, serin ve kuru bir yerde saklayın. Orijinal kutu iyi bir seçenektir.",
    tip: "Kutunun içine bir paket silika jel koyun. Nem sorunu bitecek.",
  },
];

const deepCleanSteps = [
  {
    step: "01",
    title: "Alanı Hazırla",
    desc: "Bağcıkları çıkarın. Gazete veya kağıt havlu ile doldurun — ayakkabının şeklini korur ve temizlik sırasında bastırmanıza yardımcı olur.",
  },
  {
    step: "02",
    title: "Kuru Fırçalama",
    desc: "Tüm yüzeyi krep fırçayla kuru olarak tarayın. Kabuk tutmuş kir ve toz liflerden ayrılır. Bu adımı atlarsanız ıslak temizlikte kir içeri gömülür.",
  },
  {
    step: "03",
    title: "Süet Silgisi",
    desc: "İnatçı lekeler için beyaz süet silgisi kullanın. Hafif baskıyla sürtün, leke beyaz bir kiri soyar gibi yüzeye çıkar. Ardından fırçayla uzaklaştırın.",
  },
  {
    step: "04",
    title: "Nem ile Temizlik",
    desc: "Mikrofibir bezi hafifçe ıslatın — ıslak değil, nem tutmuş. Leke noktalarını tek yönde silin. Asla suya daldırmayın, buz gibi şekle oturabilir.",
  },
  {
    step: "05",
    title: "Kurutma",
    desc: "Doğal ortamda, oda sıcaklığında kuruyun. Saç kurutma makinesi, radyatör veya doğrudan güneş yasak — süet içinden kurumak zorundadır.",
  },
  {
    step: "06",
    title: "Fırçalama ve Sprey",
    desc: "Tamamen kuruduktan sonra son bir fırçalama. Ardından koruma spreyi. Ayakkabı bakım öncesinden daha canlı görünecek.",
  },
];

const myths = [
  {
    myth: "Süet suya dayanıklı değildir.",
    fact:
      "Koruma spreyi ile treat edilmiş süet hafif yağmura kolaylıkla dayanır. Sorun materyal değil, bakımsızlık.",
  },
  {
    myth: "Leke olunca bitmişti.",
    fact:
      "Çoğu leke, hızlı müdahale ile tamamen giderilebilir. Leke oluşunca 24 saat içinde uygulanan kuru fırçalama çoğu sorunu çözer.",
  },
  {
    myth: "Süet sadece yazlık ayakkabı.",
    fact:
      "Kalın nap süet, yün astarla kombine edildiğinde kış aylarında da konforlu ve dayanıklıdır.",
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
                Care Kit — PALLET
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-10">
                Süet İçin <br />
                <span className="text-primary italic">Ritüel.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
                Süet yaşayan bir malzemedir. Yıllarca giyilen çiftler "yıpranmış"
                değil, "karakterli" görünür. Fark — rutindir.
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
                Toplam süre: 5 dakika. Hayat farkı yaratan rutinler bunlar.
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
                Ayda bir uygulayın. Zorunlu değil — ama derin temizlikten sonra
                ayakkabınız yeni gibi hisseder.
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
                Süet hakkında yaygın yanlış bilgiler.
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
                Bakım kitini edinin.
              </h2>
              <p className="text-on-primary/70 font-body text-lg">
                Her PALLET siparişinde bakım spreyi ve krep fırça hediye.
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
