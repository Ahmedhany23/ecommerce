"use client";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Stars } from "./Stars";

import {
  addToCart,
  removeFromCart,
  toggleWishlistProduct,
} from "@/src/features/products/store/useProductsStore";
import { productInTheCart } from "@/src/features/products/utils/productInTheCart";
import { cn } from "@/src/lib/utils";
import {
  DeleteOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { productInTheWishlist } from "@/src/features/products/utils/productInTheWishlist";
import { message } from "antd";
import { Product } from "@/generated/prisma/browser";

const { Meta } = Card;

type ProductCardProps = {
  product: Product;
  redirectPath: string;
};

export default function ProductCard({
  product,
  redirectPath,
}: ProductCardProps) {
  if (!product) return null;

  const [messageApi, contextHolder] = message.useMessage();

  const percentage = Math.round(
    ((product.price - product.removedPrice) / product.price) * 100,
  );

  const inCart = productInTheCart(product.id);

  const inWhishlist = productInTheWishlist(product.id);

  const handleCartToggle = () => {
    if (inCart) {
      removeFromCart(product.id);
      messageApi.success("Product removed from cart");
    } else {
      addToCart(product);
      messageApi.success("Product added to cart");
    }
  };

  const handleToggleWishlist = () => {
    toggleWishlistProduct(product);

    if (inWhishlist) {
      messageApi.success("Product removed from wishlist");
    } else {
      messageApi.success("Product added to wishlist");
    }
  };

  return (
    <>
      {contextHolder}
      <Card
        className="mx-auto! w-full max-w-[270px] rounded-xl"
        cover={
          <div className="bg-surface-alt relative flex h-[250px] items-center justify-center overflow-hidden rounded-t-xl">
            <Link href={redirectPath}>
              <Image
                src={
                  Array.isArray(product.image) && product.image[0]?.img
                    ? product.image[0].img
                    : "https://placehold.co/600x400"
                }
                alt={product.name}
                fill
                className="mx-auto max-w-[230px]! object-contain transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>

            {/* Wishlist + View + Cart */}
            <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
              <Button
                onClick={handleToggleWishlist}
                className={cn(
                  "h-10! w-10! rounded-full! text-lg!",
                  inWhishlist ? "bg-accent-danger! text-white!" : "bg-white!",
                )}
              >
                <HeartOutlined />
              </Button>

              <Button
                className={cn(
                  "h-10! w-10! rounded-full! text-lg!",
                  inCart ? "bg-accent-danger! text-white!" : "bg-white!",
                )}
                onClick={handleCartToggle}
              >
                {inCart ? <DeleteOutlined /> : <ShoppingCartOutlined />}
              </Button>
            </div>

            {/* Discount Badge */}
            {product.removedPrice && (
              <div className="bg-accent-danger absolute top-3 left-3 px-3 py-1">
                <p className="text-xs text-white">{percentage}%</p>
              </div>
            )}
          </div>
        }
      >
        {/* TITLE */}
        <Meta
          title={
            <Link href={redirectPath}>
              <h4 className="hover:text-text-muted truncate text-black transition">
                {product.name}
              </h4>
            </Link>
          }
        />

        {/* PRICES */}
        <div className="mt-3 flex items-center gap-3">
          <p className="text-accent-danger font-semibold">${product.price}</p>

          {product.removedPrice && (
            <p className="text-text-muted line-through">
              ${product.removedPrice}
            </p>
          )}
        </div>

        {/* RATING */}
        {product.rate && (
          <div className="mt-2 flex items-center gap-2">
            <Stars count={product.rate} />
            <p className="text-text-muted text-sm font-medium">(100)</p>
          </div>
        )}
      </Card>
    </>
  );
}
