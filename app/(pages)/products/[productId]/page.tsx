import { ProductFallbackLoader } from "@/features/home/components/loader/ProductFallbackLoader";
import ProductDetails, {
  ProductDetailsSkeleton,
} from "@/features/products/components/ProductDetails";
import Relateditems from "@/features/products/components/Relateditems";
import { PrismaClient } from "@prisma/client";

import { Breadcrumb } from "antd";
import { Metadata } from "next";

import Link from "next/link";
import { Suspense } from "react";

const prisma = new PrismaClient();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  return {
    title: product?.name ?? "Product",
    description: product?.description ?? "Product details",
  };
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany();
  return products.map((p) => ({ productId: p.id }));
}

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  const products = await prisma.product.findMany();

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: <Link href="/products">Products</Link>,
            },
            {
              title: product?.name ?? "Product",
            },
          ]}
        />

        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetails product={product} />
        </Suspense>

        <Suspense fallback={<ProductFallbackLoader />}>
          <Relateditems products={products} />
        </Suspense>
      </section>
    </main>
  );
}
