"use client";

import { Button, Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ProductCard from "@/components/ui/ProductCard";
import { useRef } from "react";
import { Product } from "@prisma/client";
import { CarouselRef } from "antd/es/carousel";
import { useGetCart } from "@/hooks/useGetCart";
import { useWishlist } from "../../products/store/useProductsStore";

const ProductsCarousel = ({ products }: { products: Product[] }) => {
  const carouselRef = useRef<CarouselRef>(null);

  const handleNext = () => carouselRef.current?.next();
  const handlePrev = () => carouselRef.current?.prev();

  const { cart, isLoading } = useGetCart();
  const whishlist = useWishlist();

  return (
    <>
      {/* Custom arrows */}
      <div className="absolute top-[5%] right-0 my-3 hidden w-full justify-end gap-3 md:flex lg:ml-auto">
        <Button
          onClick={handlePrev}
          className="h-12! w-12! rounded-full! text-lg!"
        >
          <ArrowLeftOutlined />
        </Button>
        <Button
          onClick={handleNext}
          className="h-12! w-12! rounded-full! text-lg!"
        >
          <ArrowRightOutlined />
        </Button>
      </div>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        draggable
        dots={false}
        arrows={false}
        infinite
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard
              product={product}
              redirectPath={`/products/${product.id}`}
              cart={cart}
              isLoadingCart={isLoading}
              whistlist={whishlist}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductsCarousel;
