import { SectionTitle } from "@/src/components/ui/SectionTitle";
import Link from "next/link";

import ProductCard from "@/src/components/ui/ProductCard";
import { Button, Col, Row } from "antd";
import { Suspense } from "react";

import { Product } from "@/generated/prisma/browser";
import { ProductFallbackLoader } from "../../home/components/loader/ProductFallbackLoader";

const JustForYouProducts = ({ products }: { products: Product[] }) => {
  if (!products) return null;

  let shallowCopyProducts = structuredClone(products);

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-20">
          <SectionTitle title={"Just For You"} />
          <Link href={"/products"}>
            <Button type="default" variant="outlined"  size="large" className="bg-white! text-black! border-black!">
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
