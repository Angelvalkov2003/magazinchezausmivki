"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { GridTileImage } from "./grid/tile";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { Product } from "lib/types";

interface CarouselProps {
  products: Product[];
}

export function Carousel({ products }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!products?.length) return null;

  const totalProducts = products.length;

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProducts);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Go to previous slide
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalProducts);
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
  }, [isAutoPlaying, totalProducts]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Get visible products (current, previous, next)
  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    const nextIndex = (currentIndex + 1) % totalProducts;
    return {
      prev: products[prevIndex],
      current: products[currentIndex],
      next: products[nextIndex],
    };
  };

  const { prev, current, next } = getVisibleProducts();

  return (
    <div
      className="relative w-full py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-sage/90 hover:bg-white dark:hover:bg-sage rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Предишен продукт"
      >
        <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-sage/90 hover:bg-white dark:hover:bg-sage rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Следващ продукт"
      >
        <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-white" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden"
      >
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Previous Product (faded) */}
          <div className="hidden md:flex flex-none w-[150px] justify-center opacity-30 transition-opacity duration-300">
            <Link
              href={`/product/${prev.handle}`}
              className="relative aspect-square h-[25vh] max-h-[200px] block"
            >
              <GridTileImage
                alt={prev.title}
                label={{
                  title: prev.title,
                  amount: prev.price.toString(),
                  compareAtAmount: prev.compareAtPrice?.toString(),
                  currencyCode: "EUR",
                }}
                src={prev.featuredImage?.url}
                fill
                sizes="150px"
              />
            </Link>
          </div>

          {/* Current Product (full opacity) - centered */}
          <div className="flex-none w-full md:w-[475px] flex justify-center opacity-100 transition-all duration-300 scale-100">
            <Link
              href={`/product/${current.handle}`}
              className="relative aspect-square h-[40vh] md:h-[30vh] max-h-[275px] block"
            >
              <GridTileImage
                alt={current.title}
                label={{
                  title: current.title,
                  amount: current.price.toString(),
                  compareAtAmount: current.compareAtPrice?.toString(),
                  currencyCode: "EUR",
                  split: true,
                }}
                objectPosition="bottom"
                src={current.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 475px, 100vw"
              />
            </Link>
          </div>

          {/* Next Product (faded) */}
          <div className="hidden md:flex flex-none w-[150px] justify-center opacity-30 transition-opacity duration-300">
            <Link
              href={`/product/${next.handle}`}
              className="relative aspect-square h-[25vh] max-h-[200px] block"
            >
              <GridTileImage
                alt={next.title}
                label={{
                  title: next.title,
                  amount: next.price.toString(),
                  compareAtAmount: next.compareAtPrice?.toString(),
                  currencyCode: "EUR",
                }}
                src={next.featuredImage?.url}
                fill
                sizes="150px"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
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
            aria-label={`Отиди на продукт ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
