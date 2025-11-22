"use client";

import { Product } from "@/src/components/types/product";
import { Stars } from "@/src/components/ui/Stars";
import { Button, Col, Row, Skeleton } from "antd";
import Image from "next/image";
import { useState } from "react";

import { HeartOutlined } from "@ant-design/icons";
import { productInTheCart } from "../utils/productInTheCart";
import {
  addToCart,
  decrement,
  increment,
  useCart,
} from "../store/useProductsStore";

export default function ProductDetails({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const inCart = productInTheCart(product.id);
  const cart = useCart();

  const handleIncrement = () => {
    increment(product.id);
  };
  const handleDecrement = () => {
    decrement(product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="py-10">
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Product Images */}
        <Col xs={24} lg={12}>
          <div className="flex flex-col-reverse justify-center gap-[30px] sm:flex-row">
            <div className="flex justify-center gap-4 sm:flex-col sm:justify-normal">
              {product.image.map((image, i) => (
                <div
                  key={i}
                  className="bg-surface-alt group flex h-[130px] cursor-pointer items-center justify-center sm:w-[170px]"
                >
                  <Image
                    onClick={() => setCurrentImageIndex(i)}
                    src={image.img}
                    alt="product"
                    width={121}
                    height={130}
                    className="object-cover transition duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="bg-surface-alt flex h-[600px] w-full items-center justify-center px-[27px] lg:w-[500px]">
              <Image
                src={product.image[currentImageIndex]?.img}
                alt="product"
                width={446}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </Col>
        {/* Product Details */}
        <Col xs={24} lg={8}>
          <h3 className="font-inter mb-4 text-2xl font-semibold">
            {product.name}
          </h3>
          <div className="mb-4 flex items-center gap-4">
            <Stars count={product.rate} />
            <p className="text-text-muted text-sm">
              ({product.reviews} Reviews)
            </p>
            <p className="text-text-muted">|</p>
            <p
              className={`${
                product.stock ? "text-accent-success" : "text-accent-danger"
              } text-sm`}
            >
              {product.stock ? "In Stock" : "Out Of Stock"}
            </p>
          </div>
          <p className="font-inter mb-6 text-2xl">${product.price}</p>
          <p className="mb-6 text-sm lg:max-w-[373px]">{product.description}</p>
          {/* Divider */}
          <div className="mb-6 w-full border border-black opacity-50"></div>

          <div className="mb-10 flex flex-col items-center justify-center gap-[19px] sm:flex-row lg:items-stretch lg:justify-normal">
            {inCart ? (
              <div className="flex items-center justify-center gap-8">
                <Button onClick={handleDecrement} size="large">
                  -
                </Button>
                <p className="text-xl font-medium">
                  {cart[product.id as number]?.quantity}
                </p>
                <Button onClick={handleIncrement} size="large">
                  +
                </Button>
              </div>
            ) : (
              <Button onClick={handleAddToCart} type="primary" size="large">
                Add To Cart
              </Button>
            )}

            <Button type="primary" size="large">
              Buy Now
            </Button>

            <Button type="primary" size="large" className="w-fit! px-2!">
              <HeartOutlined
                className={`cursor-pointer text-3xl transition group-hover:text-white`}
              />
            </Button>
          </div>

          <div className="mx-auto w-full max-w-[400px] justify-center rounded border border-black/20 lg:mx-0">
            <div className="flex items-center gap-4 py-6 pl-4">
              <Image
                width={30}
                height={30}
                src="/icons/delivery_black.png"
                alt="icon-delivery"
              />
              <div className="flex flex-col gap-2">
                <p className="font-medium">Free Delivery</p>
                <p className="text-xs font-medium underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="w-full border border-black/20"></div>

            <div className="flex items-center gap-4 py-6 pl-4">
              <Image
                width={30}
                height={30}
                src="/icons/return.png"
                alt="Icon-return"
              />
              <div className="flex flex-col gap-2">
                <p className="font-medium">Return Delivery</p>
                <p className="text-xs font-medium">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export const ProductDetailsSkeleton = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-20 px-1 lg:flex-row lg:items-stretch xl:gap-[71px]">
        {/* Images Skeleton */}
        <div className="flex flex-col-reverse justify-center gap-[30px] sm:flex-row">
          <div className="flex justify-center gap-4 sm:flex-col sm:justify-normal">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-surface-alt flex h-[130px] w-[121px] items-center justify-center"
              >
                <Skeleton.Image style={{ width: 121, height: 130 }} active />
              </div>
            ))}
          </div>

          <div className="bg-surface-alt flex h-[600px] w-full items-center justify-center px-[27px] lg:w-[500px]">
            <Skeleton.Image style={{ width: 446, height: 600 }} active />
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="w-full max-w-[500px]">
          <Skeleton active paragraph={{ rows: 1 }} />

          <div className="mt-6 mb-4">
            <Skeleton active title={false} paragraph={{ rows: 1 }} />
          </div>

          <div className="mb-6">
            <Skeleton
              active
              title={false}
              paragraph={{ rows: 1, width: "40%" }}
            />
          </div>

          <div className="mb-6">
            <Skeleton active title={false} paragraph={{ rows: 3 }} />
          </div>

          {/* Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-[19px] sm:flex-row lg:items-stretch lg:justify-normal">
            <Skeleton.Button
              active
              size="large"
              style={{ width: 150, height: 45 }}
            />
            <Skeleton.Button
              active
              size="large"
              style={{ width: 150, height: 45 }}
            />
            <Skeleton.Button
              active
              size="large"
              style={{ width: 60, height: 45 }}
            />
          </div>

          {/* Delivery box */}
          <div className="mx-auto w-full max-w-[400px] rounded border border-black/10 p-4 lg:mx-0">
            <div className="flex items-center gap-4 py-4">
              <Skeleton.Avatar shape="square" size={40} />
              <Skeleton paragraph={{ rows: 1 }} active title={false} />
            </div>

            <div className="w-full border border-black/20"></div>

            <div className="flex items-center gap-4 py-4">
              <Skeleton.Avatar shape="square" size={40} />
              <Skeleton paragraph={{ rows: 2 }} active title={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
