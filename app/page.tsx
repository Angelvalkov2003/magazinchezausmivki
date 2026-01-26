import { Metadata } from "next";
import { Carousel } from "components/carousel";
import { getProducts } from "lib/supabase/products";

const siteName = "Магазинче за усмивки";

export const metadata: Metadata = {
  description: `Запознайте се с ${siteName} - малък семеен бизнес за ръчно изработени подаръци, цветя и декорации.`,
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const products = await getProducts({ limit: 20, mainscreen: true });

  return (
    <div className="min-h-screen bg-white dark:bg-sage py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Carousel products={products} />
      </div>
    </div>
  );
}
