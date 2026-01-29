import { getCollectionProducts, getCollections } from "lib/supabase/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collections = await getCollections();
  const collection = collections.find((c) => c.handle === params.collection);

  if (!collection) return notFound();

  return {
    title: collection.title,
    description: `Продукти от ${collection.title}`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const collections = await getCollections();
  const collection = collections.find((c) => c.handle === params.collection);
  const products = await getCollectionProducts(params.collection);

  if (!collection) {
    return notFound();
  }

  return (
    <section className="pt-10">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-mustard dark:text-mustard mb-4">
          {collection.title}
        </h1>
        {collection.description && (
          <div className="mt-6">
            <p className="text-xl md:text-2xl leading-relaxed text-mustard dark:text-mustard font-medium">
              {collection.description}
            </p>
          </div>
        )}
        {products.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mustard/10 dark:bg-mustard/20 border border-mustard/30 dark:border-mustard/40">
            <span className="text-base font-semibold text-mustard dark:text-mustard">
              {products.length} {products.length === 1 ? "продукт" : "продукта"}
            </span>
          </div>
        )}
      </div>
      {products.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-xl text-sage dark:text-sage">{`Няма намерени продукти в тази колекция`}</p>
        </div>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
