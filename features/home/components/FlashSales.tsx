"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

import { Button } from "antd";
import { Suspense } from "react";
import { CountdownSalesTimer } from "./CountdownSalesTimer";
import ProductsCarousel from "./ProductsCarousel";
import { ProductFallbackLoader } from "./loader/ProductFallbackLoader";
import { Product } from "@prisma/client";


const FlashSales = ({ products }: { products: Product[] }) => {
  if (!products) return null;

  const shallowCopyProducts = structuredClone(products);

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <SectionTitle title={"Today's"}>
            <h1 className="font-inter text-3xl font-semibold text-black">
              Flash Sales
            </h1>
          </SectionTitle>
          <CountdownSalesTimer />
        </div>

        <Suspense fallback={<ProductFallbackLoader />}>
          <ProductsCarousel products={shallowCopyProducts} />
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
