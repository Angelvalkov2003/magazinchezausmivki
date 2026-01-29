import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { FilterButton } from "components/products/filter-button";
import { SortFilter } from "components/products/sort-filter";
import { getCollections, getProducts } from "lib/supabase/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продукти",
  description: "Всички продукти в магазина",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    collection?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    categories?: string;
    onSaleOnly?: string;
  }>;
}) {
  const params = await searchParams;
  const collection = params.collection;
  const sort = params.sort as
    | "price-asc"
    | "price-desc"
    | "discount-desc"
    | "name-asc"
    | "newest"
    | undefined;
  const minPrice = params.minPrice ? parseFloat(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? parseFloat(params.maxPrice) : undefined;
  const categories = params.categories
    ? params.categories.split(",")
    : undefined;
  const onSaleOnly = params.onSaleOnly === "true";

  const [products, collections] = await Promise.all([
    getProducts({
      collection,
      sort: sort || "newest",
      minPrice,
      maxPrice,
      categories,
      onSaleOnly,
    }),
    getCollections(),
  ]);

  const currentFilters = {
    minPrice,
    maxPrice,
    categories: categories || [],
    onSaleOnly,
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-4 pt-10 text-black md:flex-row dark:text-white">
      {/* Products Grid - Main Content */}
      <div className="order-first min-h-screen w-full md:order-none">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-mustard dark:text-mustard">
              {collection
                ? collections.find((c) => c.handle === collection)?.title ||
                  "Продукти"
                : "Всички Продукти"}
            </h1>
          </div>
          {collection &&
            collections.find((c) => c.handle === collection)?.description && (
              <div className="mt-6 mb-4">
                <p className="text-xl md:text-2xl leading-relaxed text-mustard dark:text-mustard font-medium">
                  {
                    collections.find((c) => c.handle === collection)
                      ?.description
                  }
                </p>
              </div>
            )}
          {products.length > 0 && (
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mustard/10 dark:bg-mustard/20 border border-mustard/30 dark:border-mustard/40">
              <span className="text-base font-semibold text-mustard dark:text-mustard">
                {products.length}{" "}
                {products.length === 1 ? "продукт" : "продукта"}
              </span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-4">
            <div className="w-full sm:w-auto">
              <SortFilter />
            </div>
            <div className="w-full sm:w-auto">
              <FilterButton
                collections={collections}
                currentFilters={currentFilters}
              />
            </div>
          </div>
        </div>
        {products.length === 0 ? (
          <p className="py-3 text-lg">Няма намерени продукти</p>
        ) : (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        )}
      </div>

      {/* Collections Menu - Right Side */}
      <div className="order-last w-full flex-none md:order-last md:w-[250px]">
        <div className="sticky top-4">
          <h2 className="mb-4 text-xl font-bold text-mustard dark:text-mustard">
            Категории
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/products"
                className={`block rounded-lg px-4 py-2 transition-colors ${
                  !collection
                    ? "bg-sage text-white dark:bg-mustard"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-sage dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Всичко
              </a>
            </li>
            {collections.map((col) => (
              <li key={col.id}>
                <a
                  href={`/products?collection=${col.handle}`}
                  className={`block rounded-lg px-4 py-2 transition-colors ${
                    collection === col.handle
                      ? "bg-sage text-white dark:bg-mustard"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-sage dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {col.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
