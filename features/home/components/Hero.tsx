"use client";
import { formatCurrency } from "@/lib/formatCurrency";
import { ArrowRightOutlined as ArrowRight } from "@ant-design/icons";
import { Product } from "@prisma/client";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = ({ products }: { products: Product[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!products) return null;

  const shallowCopyProducts = structuredClone(products);

  if (products.length === 0) {
    return (
      <div className="mx-auto mt-10 flex h-[344px] w-full max-w-4xl items-center justify-center rounded-lg bg-gray-100">
        <div className="text-center">
          <p className="text-gray-600">No featured products available</p>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            Browse all products
            <ArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 w-full lg:max-w-6xl">
      <Carousel
        autoplay
        dots
        draggable
        className="overflow-hidden lg:rounded-2xl"
        afterChange={(current) => setActiveIndex(current)}
        dotPosition="bottom"
        autoplaySpeed={5000}
      >
        {shallowCopyProducts?.slice(0, 3).map((product, index) => {
          const isActive = index === activeIndex;
          const discount = product.removedPrice
            ? Math.round(
                ((product.removedPrice - product.price) /
                  product.removedPrice) *
                  100,
              )
            : 0;
          const firstImage = product.image?.[0]?.img;

          return (
            <div key={product.id} className="relative">
              {/* Gradient Background based on category */}
              <div className={`absolute inset-0 bg-black`} />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

              <div className="relative flex h-[900px] flex-col items-center justify-between p-6 lg:h-[550px] lg:flex-row lg:p-12">
                {/* Content */}
                <div className="z-10 max-w-xl text-center lg:text-left">
                  {/* Category Badge */}
                  <div className="flex items-center justify-center gap-4 lg:justify-start">
                    {discount > 0 && (
                      <div className="bg-accent-danger rounded-full px-4 py-2 text-sm font-bold text-white">
                        Save {discount}%
                      </div>
                    )}
                  </div>

                  {/* Product Name */}
                  <h1 className="mt-6 text-3xl font-bold text-white lg:text-5xl">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < Math.floor(product.rate)
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-white/80">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
                    <span className="text-3xl font-bold text-white">
                      {formatCurrency(product.price)}
                    </span>
                    {product.removedPrice &&
                      product.removedPrice > product.price && (
                        <span className="text-xl text-gray-300 line-through">
                          {formatCurrency(product.removedPrice)}
                        </span>
                      )}
                  </div>

                  {/* Short Description */}
                  {product?.description && (
                    <p className="mt-4 line-clamp-3 text-lg text-white/90">
                      {product?.description.substring(0, 150)}...
                    </p>
                  )}

                  {/* CTA Buttons */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href={`/products/${product.id}`}
                      tabIndex={isActive ? 0 : -1}
                      aria-hidden={!isActive}
                      className="bg-accent-danger! inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white! transition-all hover:scale-105"
                    >
                      View Details
                      <ArrowRight />
                    </Link>
                    <Link
                      href={`/products?categories=${product.category}`}
                      className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white! transition-all duration-300 ease-in-out hover:scale-105"
                    >
                      Browse {product.category}
                    </Link>
                  </div>

                  {/* Stock Status */}
                  <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                    <div
                      className={`inline-flex items-center gap-2 ${product.stock ? "text-green-400" : "text-red-400"}`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full ${product.stock ? "bg-green-400" : "bg-red-400"}`}
                      ></div>
                      <span>{product.stock ? "In Stock" : "Out of Stock"}</span>
                    </div>
                    <span className="text-white/60">
                      Free shipping • 30-day returns
                    </span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative z-10 mt-8 lg:mt-0 lg:ml-8">
                  {firstImage ? (
                    <div className="relative h-64 w-64 lg:h-96 lg:w-96">
                      <Image
                        src={firstImage}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-500 hover:scale-105"
                        priority={index === 0}
                      />

                      {/* Floating Elements */}
                      {discount > 0 && (
                        <div className="bg-accent-danger absolute -top-4 -left-4 rounded-full p-4 shadow-2xl">
                          <span className="text-xl font-bold text-white">
                            -{discount}%
                          </span>
                        </div>
                      )}

                      <div className="bg-accent-danger absolute -right-4 -bottom-4 rounded-2xl p-4 backdrop-blur-sm">
                        <p className="text-sm text-white">Best Seller</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-white/10 lg:h-96 lg:w-96">
                      <p className="text-white/50">No image available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
