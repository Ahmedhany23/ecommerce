"use client";
import ProductCard from "@/src/components/ui/ProductCard";
import { Col, Row } from "antd";
import { Suspense } from "react";
import { ProductFallbackLoader } from "../../home/components/loader/ProductFallbackLoader";
import { useWishlist } from "../../products/store/useProductsStore";
import { useGetCart } from "@/src/hooks/useGetCart";

const WishlistProducts = () => {
  const wishlist = useWishlist();
  const { cart, isLoading } = useGetCart();

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <p className="font-inter text-2xl"> Wishlist ({wishlist?.length})</p>
        </div>

        <Suspense fallback={<ProductFallbackLoader />}>
          <Row gutter={[16, 16]}>
            {wishlist?.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard
                  product={product}
                  redirectPath={`/products/${product.id}`}
                  cart={cart}
                  isLoadingCart={isLoading}
                  whistlist={wishlist}
                />
              </Col>
            ))}
          </Row>
        </Suspense>
      </div>
    </section>
  );
};

export default WishlistProducts;
