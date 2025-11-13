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
};

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  const percentage = Math.round(
    ((product.price - product.removedprice) / product.price) * 100
  );

  return (
    <Card
      className="max-w-[270px] w-full mx-auto! rounded-xl"
      cover={
        <div className="relative h-[250px] bg-surface-alt flex items-center justify-center overflow-hidden rounded-t-xl">
          <Link href={`/product-details/${product.id}`}>
            <Image
              src={product.image?.[0]?.img || "https://placehold.co/600x400"}
              alt={product.name}
              fill
              className="object-contain hover:scale-110 ease-in-out transition duration-300 max-w-[230px]!  mx-auto"
            />
          </Link>

          {/* Wishlist + View */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
            <Button
              color="default"
              className="w-10! h-10! rounded-full! text-lg! bg-white!"
            >
              <HeartOutlined />
            </Button>

            <Link href={`/product-details/${product.id}`}>
              <Button className="w-10! h-10! rounded-full! text-lg! bg-white!">
                <EyeOutlined />
              </Button>
            </Link>
          </div>

          {/* Discount Badge */}
          {product.removedprice && (
            <div className="absolute top-3 left-3 bg-accent-danger px-3 py-1 ">
              <p className="text-xs text-white">{percentage}%</p>
            </div>
          )}
        </div>
      }
    >
      {/* TITLE */}
      <Meta
        title={
          <Link href={`/productdetails/${product.id}`}>
            <h4 className="truncate text-black hover:text-text-muted transition">
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
        <div className="flex items-center gap-2 mt-2">
          <Stars count={product.rate} />
          <p className="text-text-muted text-sm font-medium">(100)</p>
        </div>
      )}
    </Card>
  );
}
