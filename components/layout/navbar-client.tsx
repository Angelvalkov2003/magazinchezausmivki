"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import MobileMenu from "./navbar/mobile-menu";
import Search, { SearchSkeleton } from "./navbar/search";

const SITE_NAME = "Магазинче за усмивки";

interface Collection {
  id: string;
  handle: string;
  title: string;
}

export function NavbarClient() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching collections:", error);
        setLoading(false);
      });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }
    };

    if (productsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsDropdownOpen]);

  const menu = collections.map((c) => ({
    title: c.title,
    path: `/search/${c.handle}`,
  }));

  return (
    <>
      <nav className="relative flex items-center justify-between bg-white p-4 text-black lg:px-12 border-b border-black/15">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare size="lg" />
            </Link>
            <ul className="hidden gap-6 md:flex md:items-center">
              {/* Products Dropdown */}
              <li className="relative">
                <div ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setProductsDropdownOpen(!productsDropdownOpen)
                    }
                    className="flex items-center gap-1 text-[15px] font-semibold text-black underline-offset-4 hover:underline"
                  >
                    Продукти
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {productsDropdownOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-black/20 bg-white shadow-lg">
                      <ul className="py-2">
                        <li>
                          <Link
                            href="/products"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block px-4 py-2 text-sm text-black hover:bg-black/10"
                          >
                            Всички
                          </Link>
                        </li>
                        {!loading &&
                          collections.map((collection) => (
                            <li key={collection.id}>
                              <Link
                                href={`/products?collection=${collection.handle}`}
                                onClick={() => setProductsDropdownOpen(false)}
                                className="block px-4 py-2 text-sm text-black hover:bg-black/10"
                              >
                                {collection.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              {/* About Us Link */}
              <li>
                <Link
                  href="/za-nas"
                  prefetch={true}
                  className="text-[15px] font-semibold text-black underline-offset-4 hover:underline"
                >
                  За нас
                </Link>
              </li>

              {/* Contact Link */}
              <li>
                <Link
                  href="/contact"
                  prefetch={true}
                  className="text-[15px] font-semibold text-black underline-offset-4 hover:underline"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3">
            <CartModal />
          </div>
        </div>
      </nav>

      {/* Desktop-only categories bar (under navbar) */}
      <div className="hidden w-full border-b border-black/15 bg-mustard md:block">
        <div className="mx-auto max-w-screen-2xl px-4 py-2 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {loading ? (
              <span className="font-semibold text-black/80">Зареждане...</span>
            ) : (
              collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/products?collection=${collection.handle}`}
                  className="rounded-full px-3 py-1 font-semibold text-black transition-colors hover:bg-black/10 hover:text-black"
                >
                  {collection.title}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
