"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProductSlide {
  image: string;
  text: string;
  link: string;
}

const slides: ProductSlide[] = [
  {
    image: "/products/chashi.jpg",
    text: "Разгледайте нашите Ръчно рисувани чаши",
    link: "/products?collection=chashi",
  },
  {
    image: "/products/soevisveshi.jpg",
    text: "Разгледайте нашите Соеви свещи",
    link: "/products?collection=soevisveshi",
  },
  {
    image: "/products/splastichensapun.jpg",
    text: "Разгледайте нашите Изделия от сапун",
    link: "/products?collection=plastichensapun",
  },
];

export function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Go to previous slide
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Safety check - should never happen, but TypeScript needs it
  if (slides.length === 0) {
    return null;
  }

  // Ensure currentIndex is within bounds
  const safeIndex =
    currentIndex >= 0 && currentIndex < slides.length ? currentIndex : 0;
  const currentSlide: ProductSlide = slides[safeIndex]!;

  return (
    <div
      className="relative w-full mb-12 md:mb-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-sage/90 hover:bg-white dark:hover:bg-sage rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Предишна снимка"
      >
        <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-sage/90 hover:bg-white dark:hover:bg-sage rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Следваща снимка"
      >
        <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-white" />
      </button>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl">
        <Link
          href={currentSlide.link}
          className="block relative w-full h-[300px] md:h-[400px] lg:h-[500px] cursor-pointer group"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.text}
            fill
            className="object-cover md:object-contain object-center transition-transform duration-500 group-hover:scale-105 md:group-hover:scale-100"
            sizes="100vw"
            priority={currentIndex === 0}
          />

          {/* Cloud-shaped text bubble overlay */}
          <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-4 md:pt-8 px-4 md:px-8">
            <div
              className="bg-mustard dark:bg-mustard px-5 py-3 md:px-7 md:py-4 shadow-lg"
              style={{
                borderRadius: "50px 50px 50px 50px / 60px 60px 40px 40px",
                clipPath:
                  "polygon(0% 45%, 5% 25%, 12% 18%, 22% 22%, 30% 12%, 40% 18%, 50% 12%, 60% 18%, 70% 12%, 78% 22%, 88% 18%, 95% 25%, 100% 45%, 95% 65%, 88% 72%, 78% 68%, 70% 78%, 60% 72%, 50% 78%, 40% 72%, 30% 78%, 22% 68%, 12% 72%, 5% 65%)",
              }}
            >
              <p className="max-w-[85vw] text-center text-sm font-semibold text-white md:max-w-[520px] md:text-base lg:text-lg">
                {currentSlide.text}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-mustard dark:bg-mustard"
                : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Отиди на снимка ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
