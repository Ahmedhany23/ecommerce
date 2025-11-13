import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

import { getProducts } from "./server/products";
import { Suspense } from "react";
import ProductsCarousel from "./ProductsCarousel";
import { Button } from "antd";
import { ProductCardSkeleton } from "@/components/ui/ProductCardSkeleton";

 const FlashSales = async () => {
  const products = await getProducts();

  return (
    <section className="pb-20 overflow-hidden">
      <div className="container mx-auto relative px-2 sm:px-0">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-[87px] mb-10">
          <SectionTitle title={"Today's"}>
            <h1 className="text-3xl font-bold text-black">Flash Sales</h1>
          </SectionTitle>
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

        {/* Divider */}
        <div className="w-full border-[0.5px] border-surface-alt mt-[60px]" />
      </div>
    </section>
  );
};

export default FlashSales;

const ProductFallbackLoader = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);
