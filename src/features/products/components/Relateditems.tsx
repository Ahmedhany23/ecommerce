"use client";
import { Product } from "@/generated/prisma/browser";
import ProductCard from "@/src/components/ui/ProductCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { useGetCart } from "@/src/hooks/useGetCart";
import { Col, Row } from "antd";
import { useWishlist } from "../store/useProductsStore";

const randomValue = Math.random() - 0.5;

const Relateditems = ({ products }: { products: Product[] }) => {
  const { cart, isLoading } = useGetCart();
  const whislist = useWishlist();

  if (!products) return null;

  const shallowCopyProducts = structuredClone(products).sort(() => randomValue);

  return (
    <section className="space-y-5">
      <SectionTitle title={"Related Items"} />
      <Row gutter={[16, 16]}>
        {shallowCopyProducts.slice(0, 4).map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard
              product={product}
              redirectPath={`/products/${product.id}`}
              cart={cart}
              whistlist={whislist}
              isLoadingCart={isLoading}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Relateditems;
