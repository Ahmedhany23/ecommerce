"use client";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

import ProductCard from "@/components/ui/ProductCard";
import { Button, Col, Row } from "antd";
import { Suspense } from "react";

import { Product } from "@prisma/client";
import { ProductFallbackLoader } from "../../home/components/loader/ProductFallbackLoader";
import { useGetCart } from "@/hooks/useGetCart";
import { useWishlist } from "../../products/store/useProductsStore";

const JustForYouProducts = ({ products }: { products: Product[] }) => {
  const { cart, isLoading } = useGetCart();
  const whishlist = useWishlist();

  if (!products) return null;

  const shallowCopyProducts = structuredClone(products);

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-20">
          <SectionTitle title={"Just For You"} />
          <Link href={"/products"}>
            <Button
              type="default"
              variant="outlined"
              size="large"
              className="border-black! bg-white! text-black!"
            >
              See All
            </Button>
          </Link>
        </div>

        <Suspense fallback={<ProductFallbackLoader />}>
          <Row gutter={[16, 16]}>
            {shallowCopyProducts
              .reverse()
              .slice(0, 4)
              .map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard
                    product={product}
                    redirectPath={`/products/${product.id}`}
                    cart={cart}
                    isLoadingCart={isLoading}
                    whistlist={whishlist}
                  />
                </Col>
              ))}
          </Row>
        </Suspense>
      </div>
    </section>
  );
};

export default JustForYouProducts;
