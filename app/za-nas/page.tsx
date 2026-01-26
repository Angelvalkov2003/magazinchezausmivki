import { Metadata } from "next";
import Image from "next/image";

const siteName = "Магазинче за усмивки";

export const metadata: Metadata = {
  title: "За нас",
  description: `Запознайте се с ${siteName} - малък семеен бизнес за ръчно изработени подаръци, цветя и декорации.`,
  openGraph: {
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-sage py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Content Section */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-light-sage/30 dark:bg-light-sage/10 rounded-lg p-8 mb-8 border border-sage/20">
            <p className="text-xl leading-relaxed text-mustard dark:text-mustard mb-6 text-center">
              <strong className="text-mustard dark:text-mustard">Магазинче за усмивки</strong> е сбъдната мечта.
            </p>

            {/* First Text + Image - Desktop: image on right, Mobile: text then image */}
            <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
              <p className="text-lg leading-relaxed text-green-900 dark:text-green-200 flex-1 max-w-md text-center md:text-left">
                Мечта, родена от любовта към красивото, ръчно изработеното и истинските емоции. Ние сме малък семеен бизнес, който отвори врати на <strong className="text-mustard dark:text-mustard">01.09.2025 г.</strong> с едно просто, но много силно желание – да създаваме усмивки и да бъдем част от най-щастливите моменти в живота на хората.
              </p>
              <div className="relative w-full md:w-80 flex-shrink-0 flex justify-center">
                <Image
                  src="/magazin1.jpg"
                  alt="Магазинче за усмивки - Снимка 1"
                  width={320}
                  height={240}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>

            {/* Second Text + Image - Desktop: image on right, Mobile: text then image */}
            <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
              <p className="text-lg leading-relaxed text-green-900 dark:text-green-200 flex-1 max-w-md text-center md:text-left">
                Нашият стимул винаги е бил да подкрепяме малките търговци и творци на ръчно изработени изделия, които влагат сърце, време и внимание във всеки детайл. Вярваме, че ръчната изработка носи душа – затова подбрахме с грижа подаръци, цветя и декорации, които разказват истории и носят послание.
              </p>
              <div className="relative w-full md:w-80 flex-shrink-0 flex justify-center">
                <Image
                  src="/magazin2.jpg"
                  alt="Магазинче за усмивки - Снимка 2"
                  width={320}
                  height={240}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>

            {/* Third Text + Image - Desktop: image on right, Mobile: text then image */}
            <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
              <div className="flex-1 max-w-md text-center md:text-left">
                <p className="text-lg leading-relaxed text-green-900 dark:text-green-200 mb-6">
                  В <strong className="text-mustard dark:text-mustard">Магазинче за усмивки</strong> ще откриете не просто продукти, а малки красоти, създадени с обич – за рождени дни, празници, специални поводи или просто за да зарадвате някого без причина. За нас всеки клиент е една малка история, а всяка поръчка – доверие, което приемаме с благодарност и отговорност.
                </p>
                <p className="text-lg leading-relaxed text-green-900 dark:text-green-200">
                  Мечтата ни винаги е била да бъдем до вас в най-ценните ви мигове – в усмивките, изненадите, сълзите от радост и топлите спомени. И днес, с много любов и вдъхновение, продължаваме да я живеем всеки ден.
                </p>
              </div>
              <div className="relative w-full md:w-80 flex-shrink-0 flex justify-center">
                <Image
                  src="/magazin3.jpg"
                  alt="Магазинче за усмивки - Снимка 3"
                  width={320}
                  height={240}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
            <div className="bg-peach/40 dark:bg-peach/20 rounded-lg p-6 mt-8 border border-peach/50">
              <p className="text-xl font-semibold text-mustard dark:text-mustard text-center">
                Добре дошли в <span className="text-mustard dark:text-mustard">Магазинче за усмивки</span> – мястото, където подаръците се правят с обич, а усмивките са най-важното. 🤍
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
