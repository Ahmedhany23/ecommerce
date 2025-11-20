"use client";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Stars } from "./Stars";
import { Product } from "../types/product";

import { HeartOutlined, EyeOutlined } from "@ant-design/icons";

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

  const percentage = Math.round(
    ((product.price - product.removedprice) / product.price) * 100,
  );

  return (
    <Card
      className="mx-auto! w-full max-w-[270px] rounded-xl"
      cover={
        <div className="bg-surface-alt relative flex h-[250px] items-center justify-center overflow-hidden rounded-t-xl">
          <Link href={redirectPath}>
            <Image
              src={product.image?.[0]?.img || "https://placehold.co/600x400"}
              alt={product.name}
              fill
              className="mx-auto max-w-[230px]! object-contain transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>

          {/* Wishlist + View */}
          <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
            <Button
              color="default"
              className="h-10! w-10! rounded-full! bg-white! text-lg!"
            >
              <HeartOutlined />
            </Button>

            <Link href={redirectPath}>
              <Button className="h-10! w-10! rounded-full! bg-white! text-lg!">
                <EyeOutlined />
              </Button>
            </Link>
          </div>

          {/* Discount Badge */}
          {product.removedprice && (
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

        {product.removedprice && (
          <p className="text-text-muted line-through">
            ${product.removedprice}
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
  );
}
