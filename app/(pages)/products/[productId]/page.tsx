import { ProductFallbackLoader } from "@/features/home/components/loader/ProductFallbackLoader";
import ProductDetails, {
  ProductDetailsSkeleton,
} from "@/features/products/components/ProductDetails";
import Relateditems from "@/features/products/components/Relateditems";

import { getProduct, getProducts } from "@/server/products";
import { Breadcrumb } from "antd";
import { Metadata } from "next";

import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProduct(productId);

  return {
    title: product?.name ?? "Product",
    description: product?.description ?? "Product details",
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ productId: p.id }));
}

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  const products = await getProducts();

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
