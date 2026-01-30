import Image from "next/image";
import Link from "next/link";

import bannerDesktop from "../banners/comp.webp";
import bannerMobile from "../banners/phone.webp";

export function WelcomeBanner() {
  const DESKTOP_VISIBLE_HEIGHT_RATIO = 0.86; // crop ~14% from bottom

  return (
    <div className="w-full">
      <Link
        href="/products"
        aria-label="Виж всички продукти"
        className="block"
      >
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

          {/* Desktop banner */}
          <div
            className="relative hidden md:block w-full"
            style={{
              // Show ~86% of the image height (crop ~14% from bottom).
              aspectRatio:
                bannerDesktop.width /
                (bannerDesktop.height * DESKTOP_VISIBLE_HEIGHT_RATIO),
            }}
          >
            <Image
              src={bannerDesktop}
              alt="Банер - виж всички продукти"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1280px) 1200px, (min-width: 768px) 900px, 100vw"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
