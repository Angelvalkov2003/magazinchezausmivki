import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { Product } from "lib/types";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-light-sage dark:bg-sage p-2 text-sm text-gray-900 dark:text-white">
          {product.compareAtPrice && product.compareAtPrice > product.price ? (
            <div className="flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400 line-through">
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
        <div className="mb-6 text-sm leading-tight dark:text-white/[60%]">
          {product.description}
        </div>
      )}
      <AddToCart product={product} />
    </>
  );
}
