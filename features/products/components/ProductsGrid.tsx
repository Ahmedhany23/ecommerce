"use client";
import { Product } from "@prisma/client";
import ProductCard from "@/components/ui/ProductCard";
import { useGetCart } from "@/hooks/useGetCart";
import { Col, Row } from "antd";
import { useWishlist } from "../store/useProductsStore";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  const { cart, isLoading } = useGetCart();
  const whishlist = useWishlist();

  if (!products) return null;

  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
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
  );
};

export default ProductsGrid;
