"use client";

import { Button, Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ProductCard from "@/components/ui/ProductCard";
import { useRef } from "react";
import { Product } from "@/components/types/product";

const ProductsCarousel = ({ products }: { products: Product[] }) => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => carouselRef.current?.next();
  const handlePrev = () => carouselRef.current?.prev();

  return (
    <>
      {/* Custom arrows */}
      <div className="flex gap-3 lg:ml-auto w-full justify-end my-3">
        <Button onClick={handlePrev} className="rounded-full! w-12! h-12! text-lg!">
          <ArrowLeftOutlined />
        </Button>
        <Button onClick={handleNext} className="rounded-full! w-12! h-12! text-lg!">
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
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductsCarousel;
