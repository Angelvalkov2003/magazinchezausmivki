import Image from "next/image";
import Link from "next/link";

import bannerMobile from "../banners/phone.webp";
import bannerDesktop from "../products/comp5.png";

export function WelcomeBanner() {
  const DESKTOP_VISIBLE_HEIGHT_RATIO = 0.75; // показва 75%, отрежда 25% отдолу и 37% отгоре

  return (
    <div className="w-full">
      <Link href="/products" aria-label="Виж всички продукти" className="block">
        <div className="w-full overflow-hidden rounded-none border-2 border-light-sage/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:border-sage/30 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] md:rounded-3xl">
          {/* Mobile banner */}
          <div className="block md:hidden">
            <Image
              src={bannerMobile}
              alt="Банер - виж всички продукти"
              priority
              className="h-auto w-full"
              sizes="100vw"
            />
          </div>

          {/* Desktop banner: comp5 + текстове от код */}
          <div
            className="relative hidden md:block w-full"
            style={{
              aspectRatio:
                bannerDesktop.width /
                (bannerDesktop.height * DESKTOP_VISIBLE_HEIGHT_RATIO),
            }}
          >
            <Image
              src={bannerDesktop}
              alt=""
              fill
              priority
              quality={90}
              className="object-cover object-[50%_37%]"
              sizes="(min-width: 1280px) 1920px, (min-width: 768px) 100vw, 100vw"
            />
            {/* Оверлей: лого горе в центъра + текстове и бутон отдолу */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-between py-8 md:py-10 lg:py-12"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
            >
              {/* Лого горе в центъра – малко по-малко, малко нагоре */}
              <div className="relative mt-2 flex shrink-0 items-center justify-center md:mt-3 lg:mt-4">
                <Image
                  src="/logo_usmivka_final.png"
                  alt="Магазинче за усмивки"
                  width={380}
                  height={162}
                  className="h-auto w-72 object-contain md:w-80 lg:w-96"
                  priority
                />
              </div>

              {/* Заглавие, подзаглавие и бутон – малко нагоре под логото */}
              <div className="-mt-14 flex flex-col items-center gap-2 text-center md:-mt-20 lg:-mt-28">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#c94a32] md:text-2xl lg:text-3xl">
                  ПОДАРЪЦИ ЗА ВСЕКИ ПОВОД
                </h2>
                <p className="text-sm font-medium text-[#c94a32] md:text-base lg:text-lg">
                  Малки жестове. Големи усмивки.
                </p>
                <span className="mt-3 inline-block rounded-lg bg-gradient-to-r from-[#d4533d] to-[#e87a5a] px-6 py-2.5 text-sm font-bold text-white shadow-md md:text-base">
                  РАЗГЛЕДАЙ ПРОДУКТИТЕ
                </span>
              </div>

              {/* Празно място отдолу за баланс */}
              <div className="h-4 md:h-6" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
