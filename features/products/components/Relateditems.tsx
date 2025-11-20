import { Product } from "@/components/types/product";
import ProductCard from "@/components/ui/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Col, Row } from "antd";
import React from "react";

const Relateditems = ({ products }: { products: Product[] }) => {
  let shallowCopyProducts = structuredClone(products);

  if (!products) return null;

  return (
    <section className="space-y-5">
      <SectionTitle title={"Related Items"} />
      <Row gutter={[16, 16]}>
        {shallowCopyProducts
          .sort(() => Math.random() - 0.5)
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
    </section>
  );
};

export default Relateditems;
