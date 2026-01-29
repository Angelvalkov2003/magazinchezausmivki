import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/types";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-4xl font-bold text-black md:text-5xl">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-mustard/25 p-2 text-sm font-semibold text-black">
          {product.compareAtPrice && product.compareAtPrice > product.price ? (
            <div className="flex items-center gap-2">
              <span className="text-red-700 line-through">
                <Price
                  amount={product.compareAtPrice.toString()}
                  currencyCode="EUR"
                />
              </span>
              <Price
                amount={product.price.toString()}
                currencyCode="EUR"
              />
            </div>
          ) : (
            <Price
              amount={product.price.toString()}
              currencyCode="EUR"
            />
          )}
        </div>
      </div>
      {product.description && (
        <div className="mb-6 text-base leading-relaxed text-black/80">
          {product.description}
        </div>
      )}
      <AddToCart product={product} />
    </>
  );
}
