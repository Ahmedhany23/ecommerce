"use client";

import { Stars } from "@/components/ui/Stars";
import { Button, Col, message, Row, Skeleton } from "antd";
import Image from "next/image";
import { useState } from "react";

import { Product } from "@prisma/client";
import { useAddProductIntoCart } from "@/hooks/useAddProductIntoCart";
import { useDecrementProduct } from "@/hooks/useDecrementProduct";
import { useGetCart } from "@/hooks/useGetCart";
import { useIncrementProduct } from "@/hooks/useIncrementProduct";
import { useRemoveProductFromCart } from "@/hooks/useRemoveProductFromCart";
import { HeartOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import {
  addToCart,
  decrement,
  increment,
  removeFromCart,
  toggleWishlistProduct,
  useWishlist,
} from "../store/useProductsStore";
import { productInTheCart } from "../utils/productInTheCart";
import { productInTheWishlist } from "../utils/productInTheWishlist";
import Link from "next/link";

interface ProductDetailsProps {
  product: Product | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { cart, isLoading: isLoadingCart } = useGetCart();
  const whistlist = useWishlist();
  const { status } = useSession();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutationAddProductIntoCart, loadingAddProductIntoCart } =
    useAddProductIntoCart();

  const { mutationRemoveProductFromCart, loadingRemoveProductFromCart } =
    useRemoveProductFromCart();

  const { mutationIncrementProduct, loadingIncrementProduct } =
    useIncrementProduct();

  const { mutationDecrementProduct, loadingDecrementProduct } =
    useDecrementProduct();

  if (!product) return null;

  const inCart = productInTheCart(product.id, cart);
  const inWhishlist = productInTheWishlist(product.id, whistlist);

  const currentItem = cart.find((item) => item.product.id === product.id);

  const handleIncrement = () => {
    if (status === "authenticated") {
      mutationIncrementProduct(product.id)
        .then(() => {
          messageApi.success("Product increment to cart");
        })
        .catch(() => {
          messageApi.error("Failed to add product to cart");
        });
    } else {
      increment(product.id);
      messageApi.success("Product increment to cart");
    }
  };

  const handleDecrement = () => {
    if (status === "authenticated") {
      if (currentItem?.quantity === 1) {
        mutationRemoveProductFromCart(product.id)
          .then(() => {
            messageApi.success("Product removed from cart");
          })
          .catch(() => {
            messageApi.error("Failed to remove product from cart");
          });
      } else {
        mutationDecrementProduct(product.id)
          .then(() => {
            messageApi.success("Product decrement to cart");
          })
          .catch(() => {
            messageApi.error("Failed to decrement product from cart");
          });
      }
    } else {
      if (currentItem?.quantity === 1) {
        removeFromCart(product.id);
      } else {
        decrement(product.id);
      }
    }
  };

  const handleAddToCart = () => {
    if (status === "authenticated") {
      mutationAddProductIntoCart(product.id)
        .then(() => {
          messageApi.success("Product added to cart");
        })
        .catch(() => {
          messageApi.error("Failed to add product to cart");
        });
    } else {
      addToCart(product);
      messageApi.success("Product added to cart");
    }
  };

  const handleToggleWishlist = () => {
    toggleWishlistProduct(product);
  };

  return (
    <>
      {contextHolder}
      <div className="py-10">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} lg={12}>
            <div className="flex flex-col-reverse justify-center gap-[30px] sm:flex-row">
              <div className="flex w-full max-w-[130px] justify-center gap-4 sm:flex-col sm:justify-normal">
                {product.image.map((image, i) => (
                  <div
                    key={i}
                    className="bg-surface-alt group relative flex h-[130px] w-full cursor-pointer items-center justify-center"
                  >
                    <Image
                      onClick={() => setCurrentImageIndex(i)}
                      src={image.img}
                      alt="product"
                      fill
                      className="object-contain object-center transition duration-200 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-surface-alt relative flex h-[600px] w-full max-w-[500px] items-center justify-center px-[27px]">
                <Image
                  src={product.image[currentImageIndex]?.img}
                  alt="product"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Col>
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
            <p className="mb-6 text-sm lg:max-w-[373px]">
              {product.description}
            </p>
            <div className="mb-6 w-full border border-black opacity-50"></div>

            <div className="mb-10 flex flex-col items-center justify-center gap-[19px] sm:flex-row lg:items-stretch lg:justify-normal">
              {isLoadingCart ? (
                <Skeleton.Input />
              ) : inCart ? (
                <div className="flex items-center justify-center gap-8">
                  <Button
                    onClick={handleDecrement}
                    disabled={
                      loadingRemoveProductFromCart || loadingDecrementProduct
                    }
                    loading={
                      loadingRemoveProductFromCart || loadingDecrementProduct
                    }
                    size="large"
                  >
                    -
                  </Button>
                  <p className="text-xl font-medium">{currentItem?.quantity}</p>
                  <Button
                    onClick={handleIncrement}
                    disabled={loadingIncrementProduct}
                    loading={loadingIncrementProduct}
                    size="large"
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  loading={loadingAddProductIntoCart}
                  disabled={loadingAddProductIntoCart}
                  type="primary"
                  size="large"
                >
                  Add To Cart
                </Button>
              )}
              <Link href="/checkout">
                <Button type="primary" size="large">
                  Buy Now
                </Button>
              </Link>

              <Button
                type={inWhishlist ? "primary" : "default"}
                size="large"
                onClick={handleToggleWishlist}
                className="w-fit! px-2!"
              >
                <HeartOutlined className="cursor-pointer text-3xl transition group-hover:text-white" />
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
    </>
  );
}

export const ProductDetailsSkeleton = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-20 px-1 lg:flex-row lg:items-stretch xl:gap-[71px]">
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
