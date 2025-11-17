import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

import { Product } from "@/components/types/product";
import ProductCard from "@/components/ui/ProductCard";
import { Button, Col, Row } from "antd";
import { Suspense } from "react";
import { ProductFallbackLoader } from "./loader/ProductFallbackLoader";

const BestSellingProducts = ({ products }: { products: Product[] }) => {
  if (!products) return null;

  let shallowCopyProducts = structuredClone(products);

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <SectionTitle title={"This Month"}>
            <h1 className="font-inter text-3xl font-semibold text-black">
              Best Selling Products
            </h1>
          </SectionTitle>
        </div>

        <Suspense fallback={<ProductFallbackLoader />}>
          <Row gutter={[16, 16]}>
            {shallowCopyProducts
              .reverse()
              .slice(0, 4)
              .map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </Suspense>

        {/* View all */}
        <div className="absolute md:top-5 right-0 top-0">
          <Link href={"/products"}>
            <Button type="primary" size="large">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
