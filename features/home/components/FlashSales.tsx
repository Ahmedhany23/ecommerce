import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

import { ProductCardSkeleton } from "@/components/ui/ProductCardSkeleton";
import { Button } from "antd";
import { Suspense } from "react";
import ProductsCarousel from "./ProductsCarousel";
import { getProducts } from "./server/products";
import { CountdownSalesTimer } from "./CountdownSalesTimer";
import { Divider } from "@/components/ui/Divider";

const FlashSales = async () => {
  const products = await getProducts();

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <SectionTitle title={"Today's"}>
            <h1 className="text-3xl font-bold text-black">Flash Sales</h1>
          </SectionTitle>
          <CountdownSalesTimer />
        </div>

        <Suspense fallback={<ProductFallbackLoader />}>
          <ProductsCarousel products={products} />
        </Suspense>

        {/* View all */}
        <div className="mt-[76px] text-center">
          <Link href={"/products"}>
            <Button type="primary" size="large">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;

export const ProductFallbackLoader = () => (
  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);
